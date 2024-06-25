// import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { MessageType } from "@protobuf-ts/runtime";
import { SeriesItem } from "./series";
import { Timestamp } from "../google/protobuf/timestamp";
import { UserItem } from "./users";
import { SponsorPlanItem } from "./sponsors";
import { DoubleValue } from "../google/protobuf/wrappers";
import { DecimalValue } from "./types";
import { ChapterGroupItem } from "./chapters";
import { ChapterItem } from "./chapters";
import { PageInfoResponse } from "./pagination";
import { PageInfoRequest } from "./pagination";
import { BoolValue } from "../google/protobuf/wrappers";
import { Int64Value } from "../google/protobuf/wrappers";
import { Int32Value } from "../google/protobuf/wrappers";
import { StringValue } from "../google/protobuf/wrappers";
/**
 * @generated from protobuf message wuxiaworld.api.v2.SearchNovelsRequest
 */
export interface SearchNovelsRequest {
    /**
     * @generated from protobuf field: google.protobuf.StringValue title = 1;
     */
    title?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.StringValue language = 2;
     */
    language?: StringValue;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelItem.Status status = 3;
     */
    status: NovelItem_Status;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SearchNovelsRequest.SortType sortType = 4;
     */
    sortType: SearchNovelsRequest_SortType;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SearchNovelsRequest.SortDirection sortDirection = 5;
     */
    sortDirection: SearchNovelsRequest_SortDirection;
    /**
     * @generated from protobuf field: google.protobuf.Int32Value searchAfterId = 6;
     */
    searchAfterId?: Int32Value;
    /**
     * @generated from protobuf field: int32 count = 7;
     */
    count: number;
    /**
     * @generated from protobuf field: google.protobuf.Int64Value randomSeed = 8;
     */
    randomSeed?: Int64Value;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SearchNovelsRequest.TagsFilter tagsFilter = 9;
     */
    tagsFilter?: SearchNovelsRequest_TagsFilter;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SearchNovelsRequest.GenresFilter genresFilter = 10;
     */
    genresFilter?: SearchNovelsRequest_GenresFilter;
    /**
     * @generated from protobuf field: google.protobuf.BoolValue sneakPeek = 11;
     */
    sneakPeek?: BoolValue;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.SearchNovelsRequest.TagsFilter
 */
export interface SearchNovelsRequest_TagsFilter {
    /**
     * @generated from protobuf field: repeated string tags = 1;
     */
    tags: string[];
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SearchNovelsRequest.FilterOperator operator = 2;
     */
    operator: SearchNovelsRequest_FilterOperator;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.SearchNovelsRequest.GenresFilter
 */
export interface SearchNovelsRequest_GenresFilter {
    /**
     * @generated from protobuf field: repeated string genres = 1;
     */
    genres: string[];
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SearchNovelsRequest.FilterOperator operator = 2;
     */
    operator: SearchNovelsRequest_FilterOperator;
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.SearchNovelsRequest.SortType
 */
export enum SearchNovelsRequest_SortType {
    /**
     * @generated from protobuf enum value: None = 0;
     */
    None = 0,
    /**
     * @generated from protobuf enum value: Popular = 1;
     */
    Popular = 1,
    /**
     * @generated from protobuf enum value: New = 2;
     */
    New = 2,
    /**
     * @generated from protobuf enum value: Chapters = 3;
     */
    Chapters = 3,
    /**
     * @generated from protobuf enum value: Name = 4;
     */
    Name = 4,
    /**
     * @generated from protobuf enum value: Random = 5;
     */
    Random = 5,
    /**
     * @generated from protobuf enum value: Rating = 6;
     */
    Rating = 6
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.SearchNovelsRequest.FilterOperator
 */
export enum SearchNovelsRequest_FilterOperator {
    /**
     * @generated from protobuf enum value: And = 0;
     */
    And = 0,
    /**
     * @generated from protobuf enum value: Or = 1;
     */
    Or = 1
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.SearchNovelsRequest.SortDirection
 */
export enum SearchNovelsRequest_SortDirection {
    /**
     * @generated from protobuf enum value: ASC = 0;
     */
    ASC = 0,
    /**
     * @generated from protobuf enum value: DESC = 1;
     */
    DESC = 1
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.SearchNovelsResponse
 */
export interface SearchNovelsResponse {
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.NovelItem items = 1;
     */
    items: NovelItem[];
    /**
     * @generated from protobuf field: int64 total = 2;
     */
    total: number;
    /**
     * @generated from protobuf field: bool result = 3;
     */
    result: boolean;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetNovelRequest
 */
export interface GetNovelRequest {
    /**
     * @generated from protobuf oneof: selector
     */
    selector: {
        oneofKind: "id";
        /**
         * @generated from protobuf field: int32 id = 1;
         */
        id: number;
    } | {
        oneofKind: "slug";
        /**
         * @generated from protobuf field: string slug = 2;
         */
        slug: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetNovelResponse
 */
export interface GetNovelResponse {
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelItem item = 1;
     */
    item?: NovelItem;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetNovelsRequest
 */
export interface GetNovelsRequest {
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.GetNovelsRequest.FilterNovels filters = 1;
     */
    filters: GetNovelsRequest_FilterNovels[];
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.PageInfoRequest pageInfo = 2;
     */
    pageInfo?: PageInfoRequest;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.GetNovelsRequest.SortBy sortBy = 3;
     */
    sortBy: GetNovelsRequest_SortBy;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.GetNovelsRequest.SortDirection sortDirection = 4;
     */
    sortDirection: GetNovelsRequest_SortDirection;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetNovelsRequest.FilterGenres
 */
export interface GetNovelsRequest_FilterGenres {
    /**
     * @generated from protobuf field: repeated string genres = 1;
     */
    genres: string[];
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetNovelsRequest.FilterNovels
 */
export interface GetNovelsRequest_FilterNovels {
    /**
     * @generated from protobuf oneof: filter
     */
    filter: {
        oneofKind: "hasSponsorPlans";
        /**
         * @generated from protobuf field: bool hasSponsorPlans = 1;
         */
        hasSponsorPlans: boolean;
    } | {
        oneofKind: "name";
        /**
         * @generated from protobuf field: string name = 2;
         */
        name: string;
    } | {
        oneofKind: "isLocked";
        /**
         * @generated from protobuf field: bool isLocked = 3;
         */
        isLocked: boolean;
    } | {
        oneofKind: "genres";
        /**
         * @generated from protobuf field: wuxiaworld.api.v2.GetNovelsRequest.FilterGenres genres = 4;
         */
        genres: GetNovelsRequest_FilterGenres;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.GetNovelsRequest.SortBy
 */
export enum GetNovelsRequest_SortBy {
    /**
     * @generated from protobuf enum value: Id = 0;
     */
    Id = 0,
    /**
     * @generated from protobuf enum value: Name = 1;
     */
    Name = 1
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.GetNovelsRequest.SortDirection
 */
export enum GetNovelsRequest_SortDirection {
    /**
     * @generated from protobuf enum value: ASC = 0;
     */
    ASC = 0,
    /**
     * @generated from protobuf enum value: DESC = 1;
     */
    DESC = 1
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetNovelsResponse
 */
export interface GetNovelsResponse {
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.NovelItem items = 1;
     */
    items: NovelItem[];
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.PageInfoResponse pageInfo = 2;
     */
    pageInfo?: PageInfoResponse;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetSponsorNovelsRequest
 */
export interface GetSponsorNovelsRequest {
    /**
     * @generated from protobuf field: bool excludeMySponsored = 1;
     */
    excludeMySponsored: boolean;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.PageInfoRequest pageInfo = 2;
     */
    pageInfo?: PageInfoRequest;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.GetSponsorNovelsRequest.SortBy sortBy = 3;
     */
    sortBy: GetSponsorNovelsRequest_SortBy;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.GetSponsorNovelsRequest.SortDirection sortDirection = 4;
     */
    sortDirection: GetSponsorNovelsRequest_SortDirection;
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.GetSponsorNovelsRequest.FilterNovels filters = 5;
     */
    filters: GetSponsorNovelsRequest_FilterNovels[];
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetSponsorNovelsRequest.FilterNovels
 */
export interface GetSponsorNovelsRequest_FilterNovels {
    /**
     * @generated from protobuf oneof: filter
     */
    filter: {
        oneofKind: "name";
        /**
         * @generated from protobuf field: string name = 1;
         */
        name: string;
    } | {
        oneofKind: undefined;
    };
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.GetSponsorNovelsRequest.SortBy
 */
export enum GetSponsorNovelsRequest_SortBy {
    /**
     * @generated from protobuf enum value: Id = 0;
     */
    Id = 0,
    /**
     * @generated from protobuf enum value: Name = 1;
     */
    Name = 1
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.GetSponsorNovelsRequest.SortDirection
 */
export enum GetSponsorNovelsRequest_SortDirection {
    /**
     * @generated from protobuf enum value: ASC = 0;
     */
    ASC = 0,
    /**
     * @generated from protobuf enum value: DESC = 1;
     */
    DESC = 1
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.GetSponsorNovelsResponse
 */
export interface GetSponsorNovelsResponse {
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.NovelItem items = 1;
     */
    items: NovelItem[];
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.PageInfoResponse pageInfo = 2;
     */
    pageInfo?: PageInfoResponse;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.NovelInfo
 */
export interface NovelInfo {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string slug = 3;
     */
    slug: string;
    /**
     * @generated from protobuf field: google.protobuf.StringValue coverUrl = 4;
     */
    coverUrl?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.StringValue coverBlurHash = 5;
     */
    coverBlurHash?: StringValue;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.NovelChapterInfo
 */
export interface NovelChapterInfo {
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.ChapterItem firstChapter = 1;
     */
    firstChapter?: ChapterItem;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.ChapterItem latestChapter = 2;
     */
    latestChapter?: ChapterItem;
    /**
     * @generated from protobuf field: google.protobuf.Int32Value chapterCount = 3;
     */
    chapterCount?: Int32Value;
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.ChapterGroupItem chapterGroups = 4;
     */
    chapterGroups: ChapterGroupItem[];
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.NovelKarmaInfo
 */
export interface NovelKarmaInfo {
    /**
     * @generated from protobuf field: bool isActive = 1;
     */
    isActive: boolean;
    /**
     * @generated from protobuf field: bool isFree = 2;
     */
    isFree: boolean;
    /**
     * @generated from protobuf field: customTypes.DecimalValue maxFreeChapter = 3;
     */
    maxFreeChapter?: DecimalValue;
    /**
     * @generated from protobuf field: bool canUnlockWithVip = 4;
     */
    canUnlockWithVip: boolean;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.NovelReviewInfo
 */
export interface NovelReviewInfo {
    /**
     * @generated from protobuf field: int32 count = 1;
     */
    count: number;
    /**
     * @generated from protobuf field: google.protobuf.DoubleValue rating = 2;
     */
    rating?: DoubleValue;
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.NovelSponsorInfo
 */
export interface NovelSponsorInfo {
    /**
     * @generated from protobuf field: google.protobuf.Int32Value advanceChapterCount = 1;
     */
    advanceChapterCount?: Int32Value;
    /**
     * @generated from protobuf field: google.protobuf.StringValue description = 2;
     */
    description?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.BoolValue hasAnyPlans = 3;
     */
    hasAnyPlans?: BoolValue;
    /**
     * @generated from protobuf field: repeated wuxiaworld.api.v2.SponsorPlanItem plans = 4;
     */
    plans: SponsorPlanItem[];
}
/**
 * @generated from protobuf message wuxiaworld.api.v2.NovelItem
 */
export interface NovelItem {
    /**
     * @generated from protobuf field: int32 id = 1;
     */
    id: number;
    /**
     * @generated from protobuf field: string name = 2;
     */
    name: string;
    /**
     * @generated from protobuf field: string slug = 3;
     */
    slug: string;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelItem.Status status = 4;
     */
    status: NovelItem_Status;
    /**
     * @generated from protobuf field: string abbreviation = 5;
     */
    abbreviation: string;
    /**
     * @generated from protobuf field: google.protobuf.StringValue language = 6;
     */
    language?: StringValue;
    /**
     * @generated from protobuf field: bool visible = 7;
     */
    visible: boolean;
    /**
     * @generated from protobuf field: google.protobuf.StringValue description = 8;
     */
    description?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.StringValue synopsis = 9;
     */
    synopsis?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.StringValue coverUrl = 10;
     */
    coverUrl?: StringValue;
    /**
     * @generated from protobuf field: google.protobuf.StringValue translatorName = 11;
     */
    translatorName?: StringValue;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.UserItem translator = 12;
     */
    translator?: UserItem;
    /**
     * @generated from protobuf field: google.protobuf.StringValue authorName = 13;
     */
    authorName?: StringValue;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelKarmaInfo karmaInfo = 14;
     */
    karmaInfo?: NovelKarmaInfo;
    /**
     * @generated from protobuf field: repeated string tags = 15;
     */
    tags: string[];
    /**
     * @generated from protobuf field: repeated string genres = 16;
     */
    genres: string[];
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelReviewInfo reviewInfo = 17;
     */
    reviewInfo?: NovelReviewInfo;
    /**
     * @generated from protobuf field: bool isSneakPeek = 18;
     */
    isSneakPeek: boolean;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelSponsorInfo sponsorInfo = 19;
     */
    sponsorInfo?: NovelSponsorInfo;
    /**
     * @generated from protobuf field: google.protobuf.Timestamp createdAt = 20;
     */
    createdAt?: Timestamp;
    /**
     * @generated from protobuf field: google.protobuf.StringValue coverBlurHash = 21;
     */
    coverBlurHash?: StringValue;
    /**
     * @generated from protobuf field: bool isFeatured = 22;
     */
    isFeatured: boolean;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.NovelChapterInfo chapterInfo = 23;
     */
    chapterInfo?: NovelChapterInfo;
    /**
     * @generated from protobuf field: google.protobuf.StringValue licensedFrom = 24;
     */
    licensedFrom?: StringValue;
    /**
     * @generated from protobuf field: wuxiaworld.api.v2.SeriesItem series = 25;
     */
    series?: SeriesItem;
}
/**
 * @generated from protobuf enum wuxiaworld.api.v2.NovelItem.Status
 */
export enum NovelItem_Status {
    /**
     * @generated from protobuf enum value: Finished = 0;
     */
    Finished = 0,
    /**
     * @generated from protobuf enum value: Active = 1;
     */
    Active = 1,
    /**
     * @generated from protobuf enum value: Hiatus = 2;
     */
    Hiatus = 2,
    /**
     * @generated from protobuf enum value: All = -1;
     */
    All = -1
}
// @generated message type with reflection information, may provide speed optimized methods
class SearchNovelsRequest$Type extends MessageType<SearchNovelsRequest> {
    constructor() {
        super("wuxiaworld.api.v2.SearchNovelsRequest", [
            { no: 1, name: "title", kind: "message", T: () => StringValue },
            { no: 2, name: "language", kind: "message", T: () => StringValue },
            { no: 3, name: "status", kind: "enum", T: () => ["wuxiaworld.api.v2.NovelItem.Status", NovelItem_Status] },
            { no: 4, name: "sortType", kind: "enum", T: () => ["wuxiaworld.api.v2.SearchNovelsRequest.SortType", SearchNovelsRequest_SortType] },
            { no: 5, name: "sortDirection", kind: "enum", T: () => ["wuxiaworld.api.v2.SearchNovelsRequest.SortDirection", SearchNovelsRequest_SortDirection] },
            { no: 6, name: "searchAfterId", kind: "message", T: () => Int32Value },
            { no: 7, name: "count", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 8, name: "randomSeed", kind: "message", T: () => Int64Value },
            { no: 9, name: "tagsFilter", kind: "message", T: () => SearchNovelsRequest_TagsFilter },
            { no: 10, name: "genresFilter", kind: "message", T: () => SearchNovelsRequest_GenresFilter },
            { no: 11, name: "sneakPeek", kind: "message", T: () => BoolValue }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.SearchNovelsRequest
 */
export const SearchNovelsRequest = new SearchNovelsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchNovelsRequest_TagsFilter$Type extends MessageType<SearchNovelsRequest_TagsFilter> {
    constructor() {
        super("wuxiaworld.api.v2.SearchNovelsRequest.TagsFilter", [
            { no: 1, name: "tags", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "operator", kind: "enum", T: () => ["wuxiaworld.api.v2.SearchNovelsRequest.FilterOperator", SearchNovelsRequest_FilterOperator] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.SearchNovelsRequest.TagsFilter
 */
export const SearchNovelsRequest_TagsFilter = new SearchNovelsRequest_TagsFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchNovelsRequest_GenresFilter$Type extends MessageType<SearchNovelsRequest_GenresFilter> {
    constructor() {
        super("wuxiaworld.api.v2.SearchNovelsRequest.GenresFilter", [
            { no: 1, name: "genres", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "operator", kind: "enum", T: () => ["wuxiaworld.api.v2.SearchNovelsRequest.FilterOperator", SearchNovelsRequest_FilterOperator] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.SearchNovelsRequest.GenresFilter
 */
export const SearchNovelsRequest_GenresFilter = new SearchNovelsRequest_GenresFilter$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SearchNovelsResponse$Type extends MessageType<SearchNovelsResponse> {
    constructor() {
        super("wuxiaworld.api.v2.SearchNovelsResponse", [
            { no: 1, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NovelItem },
            { no: 2, name: "total", kind: "scalar", T: 3 /*ScalarType.INT64*/, L: 2 /*LongType.NUMBER*/ },
            { no: 3, name: "result", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.SearchNovelsResponse
 */
export const SearchNovelsResponse = new SearchNovelsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNovelRequest$Type extends MessageType<GetNovelRequest> {
    constructor() {
        super("wuxiaworld.api.v2.GetNovelRequest", [
            { no: 1, name: "id", kind: "scalar", oneof: "selector", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "slug", kind: "scalar", oneof: "selector", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetNovelRequest
 */
export const GetNovelRequest = new GetNovelRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNovelResponse$Type extends MessageType<GetNovelResponse> {
    constructor() {
        super("wuxiaworld.api.v2.GetNovelResponse", [
            { no: 1, name: "item", kind: "message", T: () => NovelItem }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetNovelResponse
 */
export const GetNovelResponse = new GetNovelResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNovelsRequest$Type extends MessageType<GetNovelsRequest> {
    constructor() {
        super("wuxiaworld.api.v2.GetNovelsRequest", [
            { no: 1, name: "filters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GetNovelsRequest_FilterNovels },
            { no: 2, name: "pageInfo", kind: "message", T: () => PageInfoRequest, options: { "wuxiaworld.api.v2.required": { value: true } } },
            { no: 3, name: "sortBy", kind: "enum", T: () => ["wuxiaworld.api.v2.GetNovelsRequest.SortBy", GetNovelsRequest_SortBy] },
            { no: 4, name: "sortDirection", kind: "enum", T: () => ["wuxiaworld.api.v2.GetNovelsRequest.SortDirection", GetNovelsRequest_SortDirection] }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetNovelsRequest
 */
export const GetNovelsRequest = new GetNovelsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNovelsRequest_FilterGenres$Type extends MessageType<GetNovelsRequest_FilterGenres> {
    constructor() {
        super("wuxiaworld.api.v2.GetNovelsRequest.FilterGenres", [
            { no: 1, name: "genres", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetNovelsRequest.FilterGenres
 */
export const GetNovelsRequest_FilterGenres = new GetNovelsRequest_FilterGenres$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNovelsRequest_FilterNovels$Type extends MessageType<GetNovelsRequest_FilterNovels> {
    constructor() {
        super("wuxiaworld.api.v2.GetNovelsRequest.FilterNovels", [
            { no: 1, name: "hasSponsorPlans", kind: "scalar", oneof: "filter", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "name", kind: "scalar", oneof: "filter", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "isLocked", kind: "scalar", oneof: "filter", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "genres", kind: "message", oneof: "filter", T: () => GetNovelsRequest_FilterGenres }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetNovelsRequest.FilterNovels
 */
export const GetNovelsRequest_FilterNovels = new GetNovelsRequest_FilterNovels$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetNovelsResponse$Type extends MessageType<GetNovelsResponse> {
    constructor() {
        super("wuxiaworld.api.v2.GetNovelsResponse", [
            { no: 1, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NovelItem },
            { no: 2, name: "pageInfo", kind: "message", T: () => PageInfoResponse }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetNovelsResponse
 */
export const GetNovelsResponse = new GetNovelsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSponsorNovelsRequest$Type extends MessageType<GetSponsorNovelsRequest> {
    constructor() {
        super("wuxiaworld.api.v2.GetSponsorNovelsRequest", [
            { no: 1, name: "excludeMySponsored", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "pageInfo", kind: "message", T: () => PageInfoRequest, options: { "wuxiaworld.api.v2.required": { value: true } } },
            { no: 3, name: "sortBy", kind: "enum", T: () => ["wuxiaworld.api.v2.GetSponsorNovelsRequest.SortBy", GetSponsorNovelsRequest_SortBy] },
            { no: 4, name: "sortDirection", kind: "enum", T: () => ["wuxiaworld.api.v2.GetSponsorNovelsRequest.SortDirection", GetSponsorNovelsRequest_SortDirection] },
            { no: 5, name: "filters", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GetSponsorNovelsRequest_FilterNovels }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetSponsorNovelsRequest
 */
export const GetSponsorNovelsRequest = new GetSponsorNovelsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSponsorNovelsRequest_FilterNovels$Type extends MessageType<GetSponsorNovelsRequest_FilterNovels> {
    constructor() {
        super("wuxiaworld.api.v2.GetSponsorNovelsRequest.FilterNovels", [
            { no: 1, name: "name", kind: "scalar", oneof: "filter", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetSponsorNovelsRequest.FilterNovels
 */
export const GetSponsorNovelsRequest_FilterNovels = new GetSponsorNovelsRequest_FilterNovels$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GetSponsorNovelsResponse$Type extends MessageType<GetSponsorNovelsResponse> {
    constructor() {
        super("wuxiaworld.api.v2.GetSponsorNovelsResponse", [
            { no: 1, name: "items", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => NovelItem },
            { no: 2, name: "pageInfo", kind: "message", T: () => PageInfoResponse }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.GetSponsorNovelsResponse
 */
export const GetSponsorNovelsResponse = new GetSponsorNovelsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NovelInfo$Type extends MessageType<NovelInfo> {
    constructor() {
        super("wuxiaworld.api.v2.NovelInfo", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "slug", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "coverUrl", kind: "message", T: () => StringValue },
            { no: 5, name: "coverBlurHash", kind: "message", T: () => StringValue }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.NovelInfo
 */
export const NovelInfo = new NovelInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NovelChapterInfo$Type extends MessageType<NovelChapterInfo> {
    constructor() {
        super("wuxiaworld.api.v2.NovelChapterInfo", [
            { no: 1, name: "firstChapter", kind: "message", T: () => ChapterItem },
            { no: 2, name: "latestChapter", kind: "message", T: () => ChapterItem },
            { no: 3, name: "chapterCount", kind: "message", T: () => Int32Value },
            { no: 4, name: "chapterGroups", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ChapterGroupItem }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.NovelChapterInfo
 */
export const NovelChapterInfo = new NovelChapterInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NovelKarmaInfo$Type extends MessageType<NovelKarmaInfo> {
    constructor() {
        super("wuxiaworld.api.v2.NovelKarmaInfo", [
            { no: 1, name: "isActive", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "isFree", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "maxFreeChapter", kind: "message", T: () => DecimalValue },
            { no: 4, name: "canUnlockWithVip", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.NovelKarmaInfo
 */
export const NovelKarmaInfo = new NovelKarmaInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NovelReviewInfo$Type extends MessageType<NovelReviewInfo> {
    constructor() {
        super("wuxiaworld.api.v2.NovelReviewInfo", [
            { no: 1, name: "count", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "rating", kind: "message", T: () => DoubleValue }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.NovelReviewInfo
 */
export const NovelReviewInfo = new NovelReviewInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NovelSponsorInfo$Type extends MessageType<NovelSponsorInfo> {
    constructor() {
        super("wuxiaworld.api.v2.NovelSponsorInfo", [
            { no: 1, name: "advanceChapterCount", kind: "message", T: () => Int32Value },
            { no: 2, name: "description", kind: "message", T: () => StringValue },
            { no: 3, name: "hasAnyPlans", kind: "message", T: () => BoolValue },
            { no: 4, name: "plans", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => SponsorPlanItem }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.NovelSponsorInfo
 */
export const NovelSponsorInfo = new NovelSponsorInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NovelItem$Type extends MessageType<NovelItem> {
    constructor() {
        super("wuxiaworld.api.v2.NovelItem", [
            { no: 1, name: "id", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "slug", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "status", kind: "enum", T: () => ["wuxiaworld.api.v2.NovelItem.Status", NovelItem_Status] },
            { no: 5, name: "abbreviation", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "language", kind: "message", T: () => StringValue },
            { no: 7, name: "visible", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "description", kind: "message", T: () => StringValue },
            { no: 9, name: "synopsis", kind: "message", T: () => StringValue },
            { no: 10, name: "coverUrl", kind: "message", T: () => StringValue },
            { no: 11, name: "translatorName", kind: "message", T: () => StringValue },
            { no: 12, name: "translator", kind: "message", T: () => UserItem },
            { no: 13, name: "authorName", kind: "message", T: () => StringValue },
            { no: 14, name: "karmaInfo", kind: "message", T: () => NovelKarmaInfo },
            { no: 15, name: "tags", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 16, name: "genres", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 17, name: "reviewInfo", kind: "message", T: () => NovelReviewInfo },
            { no: 18, name: "isSneakPeek", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 19, name: "sponsorInfo", kind: "message", T: () => NovelSponsorInfo },
            { no: 20, name: "createdAt", kind: "message", T: () => Timestamp },
            { no: 21, name: "coverBlurHash", kind: "message", T: () => StringValue },
            { no: 22, name: "isFeatured", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 23, name: "chapterInfo", kind: "message", T: () => NovelChapterInfo },
            { no: 24, name: "licensedFrom", kind: "message", T: () => StringValue },
            { no: 25, name: "series", kind: "message", T: () => SeriesItem }
        ]);
    }
}
/**
 * @generated MessageType for protobuf message wuxiaworld.api.v2.NovelItem
 */
export const NovelItem = new NovelItem$Type();
/**
 * @generated ServiceType for protobuf service wuxiaworld.api.v2.Novels
 */
// export const Novels = new ServiceType("wuxiaworld.api.v2.Novels", [
//     { name: "SearchNovels", options: {}, I: SearchNovelsRequest, O: SearchNovelsResponse },
//     { name: "GetNovel", options: {}, I: GetNovelRequest, O: GetNovelResponse },
//     { name: "GetNovels", options: {}, I: GetNovelsRequest, O: GetNovelsResponse },
//     { name: "GetSponsorNovels", options: {}, I: GetSponsorNovelsRequest, O: GetSponsorNovelsResponse }
// ]);
