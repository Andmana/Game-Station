import {
    IContentRating,
    IDevelopers,
    IGenres,
    IPlatform,
    IPublisher,
    ITags,
} from "./shared";

export interface IGameDetailResponse {
    id: number;
    name: string;
    slug: string;
    description: string;
    description_raw: string;
    released?: string;
    background_image?: string;
    genres?: IGenres[];
    parent_platforms?: IParentPlatform[];
    website?: string;
    developers?: IDevelopers[];
    publishers?: IPublisher[];
    tags?: ITags[];
    esrb_rating: IContentRating;
}

export interface IGameResultResponse {
    id: number;
    name: string;
    slug: string;
    released?: string;
    genres?: IGenres[];
    tags?: ITags[];
    background_image?: string;
    parent_platforms?: IParentPlatform[];
    esrb_rating?: IContentRating;
}

export interface IGamesResponse {
    count: number;
    next?: string;
    previous?: string;
    results: IGameResultResponse[];
}

export interface IPaginatedResponse<T> {
    count: number;
    next?: string;
    previous?: string;
    results: T[];
}

interface IParentPlatform {
    platform: IPlatform;
}
