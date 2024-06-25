import { GrpcStatusCode, GrpcWebFetchTransport } from '@protobuf-ts/grpcweb-transport';
import {
    IMessageType,
    JsonValue,
    MessageType,
    PartialMessage,
    UnknownEnum,
    UnknownMap,
    UnknownScalar,
} from '@protobuf-ts/runtime';
import { RpcError, RpcOptions, RpcTransport, ServiceInfo, UnaryCall } from '@protobuf-ts/runtime-rpc';
import isEqual from 'fast-deep-equal';
import { useRef } from 'react';
import useConstant from 'use-constant';

import { StringValue } from './wrappers';
import { ApiErrorDetailItem } from './errors';
import {
    FieldDisplayOption,
    FieldRangeOption,
    FieldRequiredOption,
    FieldStringLengthOptions,
    FieldWordLengthOptions,
} from './options';

/**
 * Custom.
 *
 * Error details key in the gRPC response / message
 */
const ErrorDetailsKey = 'errordetails-bin';

// if (typeof window === 'undefined') {
//     global.XMLHttpRequest = require('xhr2');
// }

/**
 * Custom type.
 */
export type GrpcClientType<T> = new (transport: RpcTransport) => T;

/**
 * Custom type.
 */
export type GrpcRequestType<T> = new () => T;

/**
 * Custom type.
 */
export type GrpcMessage<TResponse extends object> = TResponse & {
    metadata: Record<string, string | string[]>;
};

export type GrpcObject<TI> = TI & object;

/**
 * Custom function.
 *
 * Returns protobuf StringValue of the given string.
 */
export const createStringValue = (strVal?: string | null) => {
    if (!strVal) {
        return undefined;
    }

    return StringValue.create({
        value: strVal,
    });
};

/**
 * Custom hook.
 *
 * Use it to create gRPC request.
 * Returns original request in case of duplicate requests.
 */
export const useGrpcRequest = <TRequest extends object>(
    requestType: MessageType<TRequest>,
    options: PartialMessage<TRequest>
): TRequest => {
    const initialRequest = useConstant(() => {
        const request = requestType.create(options);

        return request;
    });

    const requestOptions = useRef(options);
    const request = useRef(initialRequest);

    const { current: currentRequest } = request;

    if (!isEqual(requestOptions.current, options)) {
        requestOptions.current = options;

        const newMessage = requestType.create(options);

        if (!requestType.equals(currentRequest, newMessage)) {
            request.current = newMessage;
        }
    }

    return request.current;
};

/**
 * Custom type.
 */
export type GrpcRequestFunc<TRequest, TResponse> = (
    input: TRequest,
    options?: RpcOptions
) => UnaryCall<GrpcObject<TRequest>, GrpcObject<TResponse>>;

/**
 * Custom type.
 */
type ClientMethod = {
    name: string;
    requestType: IMessageType<any>;
    responseType: IMessageType<any>;
    options: {
        [optionName: string]: JsonValue;
    };
};

/**
 * Custom type.
 */
type ClientMethods = {
    [methodName: string]: ClientMethod;
};

/**
 * Custom type.
 */
type ClientsMap = {
    [clientName: string]: ClientMethods;
};

export type AbortablePromise<T> = Promise<T> & {
    cancel: () => void;
};

const DevToolsInterceptor = typeof window !== 'undefined' && window['__GRPCWEB_DEVTOOLS__'];

/** Custom */
export const GrpcTransport = new GrpcWebFetchTransport({
    baseUrl: getGrpcHost(),
    format: 'binary',
    interceptors: [
        {
            interceptUnary(next, method, req, options) {
                const isDev =
                    process.env.DEV ||
                    process.env.VITE_REACT_APP_ENV === 'staging' ||
                    process.env.VITE_REACT_APP_ENV === 'prod-qa';

                if (isDev && DevToolsInterceptor) {
                    const result = next(method, req, options);
                    const message = {
                        type: '__GRPCWEB_DEVTOOLS__',
                        methodType: 'unary',
                        method: method.name,
                        request: method.I.toJson(result.request),
                        response: undefined as JsonValue | undefined,
                        error: undefined as any,
                    };

                    (async () => {
                        try {
                            message.response = method.O.toJson(await result.response);
                        } catch (e) {
                            message.error = {
                                message: e.message,
                                code: e.code,
                            };
                        }

                        window.postMessage(message, '*');
                    })();

                    return result;
                }

                return next(method, req, options);
            },
        },
    ],
});

/** Custom */
const clientMap: ClientsMap = {};

/** Custom function */
function populateClientMethods<TClient extends ServiceInfo>(client: TClient) {
    let clientMethods = clientMap[client.typeName];

    if (clientMethods) {
        return clientMethods;
    }

    clientMethods = clientMap[client.typeName] = {};

    for (const method of client.methods) {
        clientMethods[method.name] = {
            name: method.name,
            requestType: method.I,
            responseType: method.O,
            options: method.options,
        };
    }

    return clientMethods;
}

/** Custom function */
function formatValidationError<T extends any[]>(str?: string, ...args: T) {
    if (!str) {
        return;
    }

    return str.replace(/{(\d+)}/g, function (match, number) {
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
}

/**
 * Custom function.
 *
 * Returns gRPC host url depending on whether the client is a browser or not.
 */
export function getGrpcHost(): string {
    return process.env.VITE_REACT_APP_GRPC_HOST!;
}

export type UnknownMessage<T> = {
    [k in keyof T]:
    | UnknownScalar
    | UnknownEnum
    | UnknownMessage<T[k]>
    | UnknownOneofGroup<T>
    | UnknownMap
    | UnknownScalar[]
    | UnknownMessage<T[k]>[]
    | UnknownEnum[]
    | undefined;
};

export type UnknownOneofGroup<T> = {
    [k in keyof T]: UnknownScalar | UnknownEnum | UnknownMessage<T[k]>;
} & {
    oneofKind: string | undefined;
};

export type OneOfKindValue<T extends UnknownOneofGroup<T>, K extends T['oneofKind']> = T extends UnknownOneofGroup<T>
    ? K extends keyof T
        ? T
        : never
    : never;

export function isOneOfKind<T extends UnknownOneofGroup<T>, K extends T['oneofKind']>(
    any: T | undefined,
    kind: K
): any is OneOfKindValue<T, K> {
    return any?.['oneofKind'] === kind;
}

/**
 * Is the given value a valid oneof group?
 *
 * We represent protobuf `oneof` as algebraic data types (ADT) in generated
 * code. But when working with messages of unknown type, the ADT does not
 * help us.
 *
 * This type guard checks if the given object adheres to the ADT rules, which
 * are as follows:
 *
 * 1) Must be an object.
 *
 * 2) Must have a "kind" discriminator property.
 *
 * 3) If "kind" is `undefined`, no member field is selected. The object
 * must not have any other properties.
 *
 * 4) If "kind" is a `string`, the member field with this name is
 * selected.
 *
 * 5) If a member field is selected, the object must have a second property
 * `value` that contains the field's value. The property must not be `undefined`.
 *
 * 6) No extra properties are allowed. The object has either one property
 * (no selection) or two properties (selection).
 *
 */
export function isOneofGroup<T extends UnknownOneofGroup<T>>(any: T): any is T {
    if (typeof any != 'object' || any === null || !any.hasOwnProperty('oneofKind')) {
        return false;
    }
    switch (typeof any.oneofKind) {
        case 'string':
            if (any[any.oneofKind] === undefined) return false;
            return Object.keys(any).length == 2;
        case 'undefined':
            return Object.keys(any).length == 1;
        default:
            return false;
    }
}

/**
 * Returns the value of the given field in a oneof group.
 */
export function getOneofValue<
    T extends UnknownOneofGroup<T> | undefined,
    K extends T extends { oneofKind: keyof T } ? T['oneofKind'] : never,
    V extends T extends { oneofKind: K } ? T[K] : never
>(oneof: T, kind: K): V | undefined {
    return oneof?.[kind] as any;
}

/**
 * Selects the given field in a oneof group.
 *
 * Note that the recommended way to modify a oneof group is to set
 * a new object:
 *
 * ```ts
 * message.result = {
 *   oneofKind: "error",
 *   error: "foo"
 * };
 * ```
 */
export function setOneofValue<
    T extends UnknownOneofGroup<T>,
    K extends T extends { oneofKind: keyof T } ? T['oneofKind'] : never,
    V extends T extends { oneofKind: K } ? T[K] : never
>(oneof: T, kind: K, value: V): void;
export function setOneofValue<T extends UnknownOneofGroup<T>>(oneof: T, kind: undefined, value?: undefined): void;
export function setOneofValue(oneof: any, kind: any, value?: any): void {
    if (oneof.oneofKind !== undefined) {
        delete oneof[oneof.oneofKind];
    }
    oneof.oneofKind = kind;
    if (value !== undefined) {
        oneof[kind] = value;
    }
}

/**
 * Selects the given field in a oneof group, just like `setOneofValue()`,
 * but works with unknown oneof groups.
 */
export function setUnknownOneofValue<T>(
    oneof: UnknownOneofGroup<T>,
    kind: string,
    value: UnknownScalar | UnknownEnum | UnknownMessage<T>
): void;
export function setUnknownOneofValue<T>(oneof: UnknownOneofGroup<T>, kind: undefined, value?: undefined): void;
export function setUnknownOneofValue<T>(oneof: UnknownOneofGroup<T>, kind?: string, value?: any): void {
    if (oneof.oneofKind !== undefined) {
        delete oneof[oneof.oneofKind];
    }
    oneof.oneofKind = kind;
    if (value !== undefined && kind !== undefined) {
        oneof[kind] = value;
    }
}

/**
 * Removes the selected field in a oneof group.
 *
 * Note that the recommended way to modify a oneof group is to set
 * a new object:
 *
 * ```ts
 * message.result = { oneofKind: undefined };
 * ```
 */
export function clearOneofValue<T extends UnknownOneofGroup<T>>(oneof: T) {
    if (oneof.oneofKind !== undefined) {
        delete oneof[oneof.oneofKind];
    }
    oneof.oneofKind = undefined;
}

/**
 * Returns the selected value of the given oneof group.
 *
 * Not that the recommended way to access a oneof group is to check
 * the "oneofKind" property and let TypeScript narrow down the union
 * type for you:
 *
 * ```ts
 * if (message.result.oneofKind === "error") {
 *   message.result.error; // string
 * }
 * ```
 *
 * In the rare case you just need the value, and do not care about
 * which protobuf field is selected, you can use this function
 * for convenience.
 */
export function getSelectedOneofValue<
    T extends UnknownOneofGroup<T>,
    V extends string extends keyof T
        ? UnknownOneofGroup<T>[string]
        : T extends { oneofKind: keyof T }
            ? T[T['oneofKind']]
            : never
>(oneof: T | undefined): V | undefined {
    if (oneof?.oneofKind === undefined) {
        return undefined;
    }
    return oneof[oneof.oneofKind] as any;
}

/**
 * Custom function.
 *
 * Validates the Grpc request fields.
 * Checks if the required field is present or not, min length and max length.
 */
export function validateGrpcRequestFields<TClient extends ServiceInfo, TMessage extends object>(
    client: TClient,
    message: TMessage
): [boolean, string?] {
    let clientMethods = clientMap[client.typeName];

    if (!clientMethods) {
        clientMethods = populateClientMethods(client);
    }

    const methodValue = Object.values(clientMethods).find(f => f.requestType.is(message));

    if (!methodValue) {
        return [true];
    }

    const messageType = methodValue.requestType;

    for (const field of messageType.fields) {
        const messageValue = message[field.localName];

        const values = Object.values(field.options || {});
        const displayField = values.find(option => FieldDisplayOption.is(option));
        let displayName = field.name;

        if (FieldDisplayOption.is(displayField)) {
            displayName = displayField.name;
        }

        for (const optionValue of values) {
            if (FieldRequiredOption.is(optionValue)) {
                if (optionValue?.value && !messageValue) {
                    return [
                        false,
                        formatValidationError(
                            optionValue.errorMessage?.value ?? `The field ${displayName} is required`,
                            optionValue.value
                        ),
                    ];
                }
            } else if (FieldStringLengthOptions.is(optionValue)) {
                const strVal = messageValue as string;

                if (optionValue) {
                    const getErrorMessage = () => {
                        if (optionValue.errorMessage?.value) {
                            return formatValidationError(
                                optionValue.errorMessage.value,
                                optionValue.minLength?.value,
                                optionValue.maxLength?.value
                            );
                        }

                        let str = `${displayName} must have `;

                        let errorParts: string[] = [];

                        if (typeof optionValue.minLength?.value !== 'undefined') {
                            errorParts.push(`a minimum length of ${optionValue.minLength!.value}`);
                        }

                        if (typeof optionValue.maxLength?.value !== 'undefined') {
                            errorParts.push(`a maximum length of ${optionValue.maxLength!.value}`);
                        }

                        return str + errorParts.join(' and ');
                    };

                    if (
                        typeof optionValue.minLength?.value !== 'undefined' &&
                        strVal.length < optionValue.minLength.value
                    ) {
                        return [false, getErrorMessage()];
                    }
                    if (
                        typeof optionValue.maxLength?.value !== 'undefined' &&
                        strVal.length > optionValue.maxLength.value
                    ) {
                        return [false, getErrorMessage()];
                    }
                }
            } else if (FieldRangeOption.is(optionValue)) {
                // TODO
            } else if (FieldWordLengthOptions.is(optionValue)) {
                // TODO
            }
        }
    }

    return [true];
}

/**
 * Custom function.
 *
 * Makes gRPC request and returns promise of protobuf Message type.
 */
export function grpcRequest<TClient extends ServiceInfo, TRequest extends object, TResponse extends object>(
    Client: GrpcClientType<TClient>,
    getMethodInfo: (client: TClient) => GrpcRequestFunc<TRequest, TResponse>,
    request: TRequest,
    metadata: Record<string, string> = {},
    rpcOptions?: RpcOptions
): AbortablePromise<GrpcMessage<TResponse>> {
    const abort = new AbortController();

    // @ts-ignore
    const client = new Client(GrpcTransport);
    // populateClientMethods(client);

    const promise = new Promise<GrpcMessage<TResponse>>((resolve, reject) => {
        const methodInfo = getMethodInfo(client);
        const options: RpcOptions = {
            meta: metadata,
            abort: abort.signal,
            ...(rpcOptions || {}),
        };

        // const [validationResult, validationError] = validateGrpcRequestFields(client, request);

        // if (!validationResult) {
        //     const errorDetails = ApiErrorDetailItem.create({
        //         description: validationError,
        //     });

        //     reject(new GrpcError('Validation Error', GrpcStatusCode.UNKNOWN, errorDetails));

        //     return;
        // }

        (async () => {
            try {
                const unaryCall: UnaryCall<TRequest, GrpcMessage<TResponse>> = methodInfo.call(
                    client,
                    request,
                    options
                );

                const [response, trailers, status] = await Promise.all([
                    unaryCall.response,
                    unaryCall.trailers,
                    unaryCall.status,
                ]);

                if (trailers && trailers[ErrorDetailsKey]) {
                    const bin = trailers[ErrorDetailsKey];

                    const u8Array = Uint8Array.from(atob(bin as string), c => c.charCodeAt(0));
                    const errorDetails = ApiErrorDetailItem.fromBinary(u8Array);

                    reject(
                        new GrpcError(errorDetails.description, GrpcStatusCode[status.code as string], errorDetails)
                    );
                } else {
                    response.metadata = trailers;

                    resolve(response);
                }
            } catch (e) {
                if (e instanceof RpcError) {
                    const code = GrpcStatusCode[e.code];

                    if (e.meta[ErrorDetailsKey]) {
                        const bin = e.meta[ErrorDetailsKey];

                        const u8Array = Uint8Array.from(atob(bin as string), c => c.charCodeAt(0));
                        const errorDetails = ApiErrorDetailItem.fromBinary(u8Array);

                        reject(new GrpcError(errorDetails.description, code, errorDetails));
                    } else {
                        const response = ApiErrorDetailItem.create({
                            description: e.message,
                        });

                        let message = response.description;

                        if (code === GrpcStatusCode.INTERNAL) {
                            message = 'A network error has occurred';
                        }

                        reject(new GrpcError(message, code, response));
                    }
                } else {
                    reject(e);
                }
            }
        })();
    });

    (promise as any).cancel = () => abort.abort();

    return promise as AbortablePromise<GrpcMessage<TResponse>>;
}

/**
 * Custom class.
 *
 * It extends the error object.
 */
export class GrpcError extends Error {
    constructor(message: string, public status: GrpcStatusCode, public response: ApiErrorDetailItem | null = null) {
        super(message);
    }
}

const req = {"status": -1, "sortType": 4, "sortDirection": 0, "count": 16, "searchAfterId": {"value": 12}}


const res = grpcRequest()