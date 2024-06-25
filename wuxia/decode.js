import { base64decode, base64encode } from "@protobuf-ts/runtime";
import { RpcError } from "@protobuf-ts/runtime-rpc";


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function parseFormat(contentType) {
    // > the sender *should* always specify the message format, e.g. +proto, +json
    //
    // > the receiver should assume the default is "+proto" when the message format is
    // > missing in Content-Type (as "application/grpc-web")
    //
    // see https://github.com/grpc/grpc/blob/master/doc/PROTOCOL-WEB.md
    switch (contentType) {
        case "application/grpc-web-text":
        case "application/grpc-web-text+proto":
            return "text";
        case "application/grpc-web":
        case "application/grpc-web+proto":
            return "binary";
        case undefined:
        case null:
            throw new RpcError("missing response content type", GrpcStatusCode[GrpcStatusCode.INTERNAL]);
        default:
            throw new RpcError("unexpected response content type: " + contentType, GrpcStatusCode[GrpcStatusCode.INTERNAL]);
    }
}

function concatBytes(a, b) {
    let n = new Uint8Array(a.length + b.length);
    n.set(a);
    n.set(b, a.length);
    return n;
}

var GrpcStatusCode;
(function (GrpcStatusCode) {
    /**
     * Not an error; returned on success.
     */
    GrpcStatusCode[GrpcStatusCode["OK"] = 0] = "OK";
    /**
     * The operation was cancelled (typically by the caller).
     */
    GrpcStatusCode[GrpcStatusCode["CANCELLED"] = 1] = "CANCELLED";
    /**
     * Unknown error. An example of where this error may be returned is if a
     * Status value received from another address space belongs to an error-space
     * that is not known in this address space. Also errors raised by APIs that
     * do not return enough error information may be converted to this error.
     */
    GrpcStatusCode[GrpcStatusCode["UNKNOWN"] = 2] = "UNKNOWN";
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    GrpcStatusCode[GrpcStatusCode["INVALID_ARGUMENT"] = 3] = "INVALID_ARGUMENT";
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    GrpcStatusCode[GrpcStatusCode["DEADLINE_EXCEEDED"] = 4] = "DEADLINE_EXCEEDED";
    /**
     * Some requested entity (e.g., file or directory) was not found.
     */
    GrpcStatusCode[GrpcStatusCode["NOT_FOUND"] = 5] = "NOT_FOUND";
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    GrpcStatusCode[GrpcStatusCode["ALREADY_EXISTS"] = 6] = "ALREADY_EXISTS";
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    GrpcStatusCode[GrpcStatusCode["PERMISSION_DENIED"] = 7] = "PERMISSION_DENIED";
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    GrpcStatusCode[GrpcStatusCode["UNAUTHENTICATED"] = 16] = "UNAUTHENTICATED";
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    GrpcStatusCode[GrpcStatusCode["RESOURCE_EXHAUSTED"] = 8] = "RESOURCE_EXHAUSTED";
    /**
     * Operation was rejected because the system is not in a state required for
     * the operations execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    GrpcStatusCode[GrpcStatusCode["FAILED_PRECONDITION"] = 9] = "FAILED_PRECONDITION";
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    GrpcStatusCode[GrpcStatusCode["ABORTED"] = 10] = "ABORTED";
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    GrpcStatusCode[GrpcStatusCode["OUT_OF_RANGE"] = 11] = "OUT_OF_RANGE";
    /**
     * Operation is not implemented or not supported/enabled in this service.
     */
    GrpcStatusCode[GrpcStatusCode["UNIMPLEMENTED"] = 12] = "UNIMPLEMENTED";
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    GrpcStatusCode[GrpcStatusCode["INTERNAL"] = 13] = "INTERNAL";
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    GrpcStatusCode[GrpcStatusCode["UNAVAILABLE"] = 14] = "UNAVAILABLE";
    /**
     * Unrecoverable data loss or corruption.
     */
    GrpcStatusCode[GrpcStatusCode["DATA_LOSS"] = 15] = "DATA_LOSS";
})(GrpcStatusCode || (GrpcStatusCode = {}));

const isReadableStream = (s) => {
    return typeof s.getReader == "function";
};

function readGrpcWebResponseBody(stream, contentType, onFrame) {
    return __awaiter(this, void 0, void 0, function* () {
        let streamReader, base64queue = "", byteQueue = new Uint8Array(0), format = parseFormat(contentType);
        // allows to read streams from the 'node-fetch' polyfill which uses
        // node.js ReadableStream instead of the what-wg streams api ReadableStream
        if (isReadableStream(stream)) {
            let whatWgReadableStream = stream.getReader();
            streamReader = {
                next: () => whatWgReadableStream.read()
            };
        }
        else {
            streamReader = stream[Symbol.asyncIterator]();
        }
        while (true) {
            let result = yield streamReader.next();
            if (result.value !== undefined) {
                if (format === "text") {
                    // the statements below just decode base64 and append to `bytesUnread`
                    // add incoming base64 to queue
                    for (let i = 0; i < result.value.length; i++)
                        base64queue += String.fromCharCode(result.value[i]);
                    // if the base64 queue is not a multiple of 4,
                    // we have to wait for more data
                    let safeLen = base64queue.length - base64queue.length % 4;
                    if (safeLen === 0)
                        continue;
                    // decode safe chunk of base64 and add to byte queue
                    byteQueue = concatBytes(byteQueue, base64decode(base64queue.substring(0, safeLen)));
                    base64queue = base64queue.substring(safeLen);
                }
                else {
                    byteQueue = concatBytes(byteQueue, result.value);
                }
                // read all fully available data frames
                while (byteQueue.length >= 5 && byteQueue[0] === GrpcWebFrame.DATA) {
                    let msgLen = 0;
                    for (let i = 1; i < 5; i++)
                        msgLen = (msgLen << 8) + byteQueue[i];
                    if (byteQueue.length - 5 >= msgLen) {
                        // we have the entire message
                        onFrame(GrpcWebFrame.DATA, byteQueue.subarray(5, 5 + msgLen));
                        byteQueue = byteQueue.subarray(5 + msgLen);
                    }
                    else
                        break; //  wait for more data
                }
            }
            // exit, but emit trailer if exists
            if (result.done) {
                if (byteQueue.length === 0)
                    break;
                if (byteQueue[0] !== GrpcWebFrame.TRAILER || byteQueue.length < 5)
                    throw new RpcError("premature EOF", GrpcStatusCode[GrpcStatusCode.DATA_LOSS]);
                onFrame(GrpcWebFrame.TRAILER, byteQueue.subarray(5));
                break;
            }
        }
    });
}