import { IQueryParams } from "../types/IQueryParams";
import {
    getCurrentDateIsoString,
    getDate30daysAgoisoString,
    getFiveYearLaterDateIsoString,
    getYearStartDateIsoString,
} from "./formatDate";

const date = new Date();
const prevYear = date.getFullYear() - 1;

export const queryConfig: Record<string, IQueryParams> = {
    default: {
        name: "Shop",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
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
            dates: `${getCurrentDateIsoString()},${getYearStartDateIsoString()}`,
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
        },
    },
    pc: {
        name: "Games For Pc",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "1",
        },
    },
    playstation: {
        name: "Games For Play Station",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "2",
        },
    },
    xbox: {
        name: "Games For Xbox",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "3",
        },
    },
    nintendo: {
        name: "Games For Nintende",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "7",
        },
    },
    android: {
        name: "Games For Android",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "8",
        },
    },
    ios: {
        name: "Games For iOS",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "4",
        },
    },
    action: {
        name: "Action Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "action",
        },
    },
    strategy: {
        name: "Strategy Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "strategy",
        },
    },
    rpg: {
        name: "RPG Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "role-playing-games-rpg",
        },
    },
    shooter: {
        name: "Shooter Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "shooter",
        },
    },
    adventure: {
        name: "Adventure Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "adventure",
        },
    },
    puzzle: {
        name: "Puzzle Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "puzzle",
        },
    },
    racing: {
        name: "Racing Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "racing",
        },
    },
    sports: {
        name: "Sports Games",
        hasSort: true,
        queryParams: {
            ordering: "-relevance",
            genres: "sports",
        },
    },
};
