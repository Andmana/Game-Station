import { Developers, Genre, Platform, Rating, Screenshot } from "./game";

export interface ScreenshotRequest {
    count: number;
    results: Screenshot[];
}

export interface GameRequest {
    id: number;
    name: string;
    description: string;
    released: string;
    screenshots_count: number;
    price?: string;
    background_image: string;
    parent_platforms: Platform[];
    developers: Developers[];
    genres: Genre[];
    esrb_rating: Rating;
}

export interface GamesRequest {
    count: number;
    next: string;
    previous: string;
    results: GameRequest[];
}
