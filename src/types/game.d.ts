export interface Platform {
    id: number;
    name: string;
}

export interface Developers {
    id: number;
    name: string;
}

export interface Genre {
    id: number;
    name: string;
}

export interface Rating {
    id: number;
    name: string;
}

export interface Screenshot {
    id: number;
    image: string;
}

export interface Game {
    id: number;
    name: string;
    description: string;
    released: string;
    background_image: string;
    platforms: Platform[];
    developers: Developers[];
    genres: Genre[];
    rating: Rating;
    price?: string;
    images?: Screenshot[];
}
