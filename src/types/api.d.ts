import { Developers, Genre, Rating, Screenshot } from "./game";

export interface ScreenshotRequest {
    count: number;
    results: Screenshot[];
}

interface PlatformObj {
    platform: PlatformObject;
}

export interface PlatformProps {
    id: number;
    name: string;
    slug: string;
}

export interface GameRequest {
    id: number;
    name: string;
    description: string;
    released: string;
    screenshots_count: number;
    price?: string;
    background_image: string;
    parent_platforms: PlatformObj[];
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
