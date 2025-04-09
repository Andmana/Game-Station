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

export const dummyGame: IGame = {
    id: 3489,
    name: "The Crew",
    slug: "the-crew",
    released: "2014-12-01",
    description:
        "The Crew is an online driving simulator developed by Ivory Tower.\nAlex Taylor, the brother of a 5-10 motor club founder Dayton, helps his brother run some errands. But it does not go according to plan as Dayton gets killed. Alex is framed for his murder and sent to prison. Five years pass, an FBI agent proposes a deal to Alex. He will be let go if he helps expose a corrupt FBI Special Agent. Alex agrees and sets out to seek revenge.\nThe Crew features a vast open world that resembles the scaled down version of the modern United States. The map is divided into five regions each of which features different geography and weather. The game&#39;s missions can be played alone or in a player&#39;s crew. The game is online-only nonetheless. Apart from the usual races, players can participate in so-called skill challenges. After every mission, the player&#39;s score is saved and displayed to all his friends. Online matchmaking allows up to eight players to participate in one race.",
    description_raw:
        "The Crew is an online driving simulator developed by Ivory Tower.\nAlex Taylor, the brother of a 5-10 motor club founder Dayton, helps his brother run some errands. But it does not go according to plan as Dayton gets killed. Alex is framed for his murder and sent to prison. Five years pass, an FBI agent proposes a deal to Alex. He will be let go if he helps expose a corrupt FBI Special Agent. Alex agrees and sets out to seek revenge.\nThe Crew features a vast open world that resembles the scaled down version of the modern United States. The map is divided into five regions each of which features different geography and weather. The game&#39;s missions can be played alone or in a player&#39;s crew. The game is online-only nonetheless. Apart from the usual races, players can participate in so-called skill challenges. After every mission, the player&#39;s score is saved and displayed to all his friends. Online matchmaking allows up to eight players to participate in one race.",
    genres: [
        {
            id: 3,
            name: "Adventure",
            slug: "adventure",
        },
        {
            id: 1,
            name: "Racing",
            slug: "racing",
        },
        {
            id: 59,
            name: "Massively Multiplayer",
            slug: "massively-multiplayer",
        },
    ],
    tags: [
        {
            id: 31,
            name: "Singleplayer",
            slug: "singleplayer",
        },
        {
            id: 7,
            name: "Multiplayer",
            slug: "multiplayer",
        },
        {
            id: 13,
            name: "Atmospheric",
            slug: "atmospheric",
        },
        {
            id: 42,
            name: "Great Soundtrack",
            slug: "great-soundtrack",
        },
        {
            id: 24,
            name: "RPG",
            slug: "rpg",
        },
        {
            id: 18,
            name: "Co-op",
            slug: "co-op",
        },
        {
            id: 36,
            name: "Open World",
            slug: "open-world",
        },
        {
            id: 411,
            name: "cooperative",
            slug: "cooperative",
        },
        {
            id: 8,
            name: "First-Person",
            slug: "first-person",
        },
        {
            id: 40845,
            name: "Partial Controller Support",
            slug: "partial-controller-support",
        },
        {
            id: 9,
            name: "Online Co-Op",
            slug: "online-co-op",
        },
        {
            id: 37,
            name: "Sandbox",
            slug: "sandbox",
        },
        {
            id: 107,
            name: "Family Friendly",
            slug: "family-friendly",
        },
        {
            id: 11,
            name: "Team-Based",
            slug: "team-based",
        },
        {
            id: 1656,
            name: "mmo",
            slug: "mmo",
        },
        {
            id: 130,
            name: "Driving",
            slug: "driving",
        },
        {
            id: 78,
            name: "America",
            slug: "america",
        },
        {
            id: 132,
            name: "Offroad",
            slug: "offroad",
        },
    ],
    publishers: [
        {
            id: 918,
            name: "Ubisoft Entertainment",
            slug: "ubisoft-entertainment",
        },
    ],
    developers: [
        {
            id: 11140,
            name: "Ubisoft Reflections",
            slug: "ubisoft-reflections",
        },
        {
            id: 14312,
            name: "Ivory Tower",
            slug: "ivory-tower",
        },
    ],
    website: "www.facebook.com",
    background_image:
        "https://media.rawg.io/media/screenshots/b79/b797325a14fc62444ca6032d59aa1c75.jpg",
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
        id: 3,
        name: "Teen",
        slug: "teen",
    },
    price: 121.09,
};
