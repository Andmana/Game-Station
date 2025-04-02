import {
    IContentRating,
    IDevelopers,
    IGenres,
    IPlatform,
    IPublisher,
    IScreenshots,
    ITags,
} from "./shared";

export interface IGameDetailResponse {
    id: number;
    name: string;
    description: string;
    released?: string;
    background_image: string;
    genres: IGenres;
    parent_platforms: IParentPlatform[];
    developers: IDevelopers[];
    publishers: IPublisher[];
    tags: ITags[];
    esrb_rating: IContentRating;
}

export interface IGameResultResponse {
    id: number;
    slug: string;
    name: string;
    released?: string;
    genres: IGenres;
    tags: ITags;
    background_image?: string;
    parent_platforms?: IParentPlatform[];
    esrb_rating: IContentRating;
}

export interface IGamesResponse {
    count: number;
    next?: string;
    previous?: string;
    results: IGameResultResponse[];
}

export interface IScreenshotsResponse {
    count: number;
    next?: string;
    previous?: string;
    results: IScreenshots[];
}

interface IParentPlatform {
    platform: IPlatform;
}
