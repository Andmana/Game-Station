import {
    IContentRating,
    IDevelopers,
    IGenres,
    IPlatform,
    IPublisher,
    IScreenshots,
    ITags,
} from "./shared";

export interface IGame {
    id: number;
    name: string;
    slug: string;
    description?: string;
    released?: string;
    background_image?: string;
    genres?: IGenres[];
    platforms?: IPlatform[];
    developers?: IDevelopers[];
    publishers?: IPublisher[];
    tags?: ITags[];
    contentRating?: IContentRating;
    screenshots?: IScreenshots;
    price?: number;
}
