export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Developers {
    id: number;
    name: string;
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
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
    released: string;
    background_image: string;
    platforms: Platform[];
    genres: Genre[];
    developers?: Developers[];
    description?: string;
    rating?: Rating;
    price?: string;
    images?: Screenshot[];
}
