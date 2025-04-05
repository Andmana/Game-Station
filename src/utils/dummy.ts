import { IGame } from "../types/IGame";

import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";

export const dummyGames: IGame[] = [
    {
        id: 3498,
        name: "Grand Theft Auto V",
        slug: "grand-theft-auto-v",
        released: "2013-09-17",
        genres: [
            {
                id: 4,
                name: "Action",
                slug: "action",
            },
        ],
        tags: [
            {
                id: 40833,
                name: "Captions available",
                slug: "captions-available",
            },
            {
                id: 40834,
                name: "Commentary available",
                slug: "commentary-available",
            },
            {
                id: 87,
                name: "Science",
                slug: "science",
            },
        ],
        background_image: img1,
        platforms: [
            {
                id: 1,
                name: "PC",
                slug: "pc",
            },
            {
                id: 2,
                name: "PlayStation",
                slug: "playstation",
            },
            {
                id: 3,
                name: "Xbox",
                slug: "xbox",
            },
        ],
        contentRating: {
            id: 4,
            name: "Mature",
            slug: "mature",
        },
        price: 10.0,
    },
    {
        id: 3328,
        name: "The Witcher 3: Wild Hunt",
        slug: "the-witcher-3-wild-hunt",
        released: "2015-05-18",
        genres: [
            {
                id: 4,
                name: "Action",
                slug: "action",
            },
            {
                id: 5,
                name: "RPG",
                slug: "role-playing-games-rpg",
            },
        ],
        tags: [
            {
                id: 75,
                name: "Local Co-Op",
                slug: "local-co-op",
            },
            {
                id: 11669,
                name: "stats",
                slug: "stats",
            },
            {
                id: 40852,
                name: "Steam Workshop",
                slug: "steam-workshop",
            },
        ],
        background_image: img2,
        platforms: [
            {
                id: 1,
                name: "PC",
                slug: "pc",
            },
            {
                id: 2,
                name: "PlayStation",
                slug: "playstation",
            },
            {
                id: 3,
                name: "Xbox",
                slug: "xbox",
            },
            {
                id: 5,
                name: "Apple Macintosh",
                slug: "mac",
            },
            {
                id: 7,
                name: "Nintendo",
                slug: "nintendo",
            },
        ],
        contentRating: {
            id: 4,
            name: "Mature",
            slug: "mature",
        },
        price: 123.213,
    },
    {
        id: 4200,
        name: "Portal 2",
        slug: "portal-2",
        released: "2011-04-18",
        genres: [
            {
                id: 2,
                name: "Shooter",
                slug: "shooter",
            },
            {
                id: 7,
                name: "Puzzle",
                slug: "puzzle",
            },
        ],
        tags: [
            {
                id: 4,
                name: "Funny",
                slug: "funny",
            },
            {
                id: 189,
                name: "Female Protagonist",
                slug: "female-protagonist",
            },
            {
                id: 123,
                name: "Comedy",
                slug: "comedy",
            },
        ],
        background_image: img3,
        platforms: [
            {
                id: 1,
                name: "PC",
                slug: "pc",
            },
            {
                id: 2,
                name: "PlayStation",
                slug: "playstation",
            },
            {
                id: 3,
                name: "Xbox",
                slug: "xbox",
            },
            {
                id: 5,
                name: "Apple Macintosh",
                slug: "mac",
            },
            {
                id: 6,
                name: "Linux",
                slug: "linux",
            },
        ],
        contentRating: {
            id: 2,
            name: "Everyone 10+",
            slug: "everyone-10-plus",
        },
        price: 100.0,
    },
    {
        id: 4291,
        name: "Counter-Strike: Global Offensive",
        slug: "counter-strike-global-offensive",
        released: "2012-08-21",
        genres: [
            {
                id: 2,
                name: "Shooter",
                slug: "shooter",
            },
        ],
        tags: [
            {
                id: 32,
                name: "Sci-fi",
                slug: "sci-fi",
            },
            {
                id: 30,
                name: "FPS",
                slug: "fps",
            },
            {
                id: 9,
                name: "Online Co-Op",
                slug: "online-co-op",
            },
        ],
        background_image: img4,

        platforms: [
            {
                id: 1,
                name: "PC",
                slug: "pc",
            },
            {
                id: 2,
                name: "PlayStation",
                slug: "playstation",
            },
            {
                id: 3,
                name: "Xbox",
                slug: "xbox",
            },
            {
                id: 6,
                name: "Linux",
                slug: "linux",
            },
        ],
        contentRating: {
            id: 4,
            name: "Mature",
            slug: "mature",
        },
        price: 42.12,
    },
    {
        id: 5286,
        name: "Tomb Raider (2013)",
        slug: "tomb-raider",
        released: "2013-03-05",
        genres: [
            {
                id: 4,
                name: "Action",
                slug: "action",
            },
        ],
        tags: [
            {
                id: 7808,
                name: "steam-trading-cards",
                slug: "steam-trading-cards",
            },
            {
                id: 18,
                name: "Co-op",
                slug: "co-op",
            },
            {
                id: 118,
                name: "Story Rich",
                slug: "story-rich",
            },
        ],
        background_image: img5,

        platforms: [
            {
                id: 1,
                name: "PC",
                slug: "pc",
            },
            {
                id: 2,
                name: "PlayStation",
                slug: "playstation",
            },
            {
                id: 3,
                name: "Xbox",
                slug: "xbox",
            },
            {
                id: 5,
                name: "Apple Macintosh",
                slug: "mac",
            },
        ],
        contentRating: {
            id: 4,
            name: "Mature",
            slug: "mature",
        },
        price: 100.12,
    },
];
