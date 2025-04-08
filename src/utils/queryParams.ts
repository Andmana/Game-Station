import { IQueryParams } from "../types/IQueryParams";
import {
    get2010StartDateIsoString,
    getCurrentDateIsoString,
    getDate30daysAgoisoString,
    getFiveYearLaterDateIsoString,
    getThisYearStartDateIsoString,
} from "./formatDate";

const date = new Date();
const prevYear = date.getFullYear() - 1;
const dateIsoString2010 = `
    ${get2010StartDateIsoString},${getCurrentDateIsoString()}
    `;

export const queryConfig: Record<string, IQueryParams> = {
    default: {
        name: "Shop",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            dates: dateIsoString2010,
        },
    },
    "last-30-days": {
        name: "Last 30 Days",
        hasSort: false,
        queryParams: {
            ordering: "-added",
            dates: `${getDate30daysAgoisoString()},${getCurrentDateIsoString()}`,
        },
    },
    upcoming: {
        name: "Upcoming Games",
        hasSort: false,
        queryParams: {
            ordering: "-added",
            dates: `${getCurrentDateIsoString()},${getFiveYearLaterDateIsoString()}`,
        },
    },
    "best-of-the-year": {
        name: "Best Of The Year",
        hasSort: false,
        queryParams: {
            ordering: "-added",
            dates: `${getThisYearStartDateIsoString()},${getCurrentDateIsoString()}`,
        },
    },
    "popular-in-prev-year": {
        name: `Popular in ${prevYear}`,
        hasSort: false,
        queryParams: {
            ordering: "-added",
            dates: `${prevYear}-01-01,${prevYear}-12-31`,
        },
    },
    "all-time-top": {
        name: `All Time Top`,
        hasSort: false,
        queryParams: {
            ordering: "-added",
            dates: dateIsoString2010,
        },
    },
    pc: {
        name: "Games For Pc",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            parent_platforms: "1",
            dates: dateIsoString2010,
        },
    },
    playstation: {
        name: "Games For Play Station",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            parent_platforms: "2",
            dates: dateIsoString2010,
        },
    },
    xbox: {
        name: "Games For Xbox",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            parent_platforms: "3",
            dates: dateIsoString2010,
        },
    },
    nintendo: {
        name: "Games For Nintende",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            parent_platforms: "7",
            dates: dateIsoString2010,
        },
    },
    android: {
        name: "Games For Android",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            parent_platforms: "8",
            dates: dateIsoString2010,
        },
    },
    ios: {
        name: "Games For iOS",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            parent_platforms: "4",
            dates: dateIsoString2010,
        },
    },
    action: {
        name: "Action Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "action",
            dates: dateIsoString2010,
        },
    },
    strategy: {
        name: "Strategy Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "strategy",
            dates: dateIsoString2010,
        },
    },
    rpg: {
        name: "RPG Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "role-playing-games-rpg",
            dates: dateIsoString2010,
        },
    },
    shooter: {
        name: "Shooter Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "shooter",
            dates: dateIsoString2010,
        },
    },
    adventure: {
        name: "Adventure Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "adventure",
            dates: dateIsoString2010,
        },
    },
    puzzle: {
        name: "Puzzle Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "puzzle",
            dates: dateIsoString2010,
        },
    },
    racing: {
        name: "Racing Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "racing",
            dates: dateIsoString2010,
        },
    },
    sports: {
        name: "Sports Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "sports",
            dates: dateIsoString2010,
        },
    },
};
