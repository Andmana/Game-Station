import {
    getCurrentDateIsoString,
    getDate30daysAgoisoString,
    getFiveYearLaterDateIsoString,
    getYearStartDateIsoString,
} from "../../utils/formatDate";

const date = new Date();
const prevYear = date.getFullYear() - 1;

export const queryConfig: Record<string, Record<string, unknown>> = {
    default: {
        name: "Shop",
        queryParams: {
            ordering: "-relevance",
        },
    },
    "last-30-days": {
        name: "Last 30 Days",
        queryParams: {
            ordering: "-added",
            dates: `${getDate30daysAgoisoString()},${getCurrentDateIsoString()}`,
        },
    },
    upcoming: {
        name: "Upcoming Games",
        queryParams: {
            ordering: "-added",
            dates: `${getCurrentDateIsoString()},${getFiveYearLaterDateIsoString()}`,
        },
    },
    "best-of-the-year": {
        name: "Best Of The Year",
        queryParams: {
            ordering: "-added",
            dates: `${getCurrentDateIsoString()},${getYearStartDateIsoString()}`,
        },
    },
    "popular-in-prev-year": {
        name: `Popular in ${prevYear}`,
        queryParams: {
            ordering: "-added",
            dates: `${prevYear}-01-01,${prevYear}-12-31`,
        },
    },
    "all-time-top": {
        name: `All Time Top`,
        queryParams: {
            ordering: "-added",
        },
    },
    pc: {
        name: "Games For Pc",
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "1",
        },
    },
    playstation: {
        name: "Games For Play Station",
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "2",
        },
    },
    xbox: {
        name: "Games For Xbox",
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "3",
        },
    },
    nintendo: {
        name: "Games For Nintende",
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "7",
        },
    },
    android: {
        name: "Games For Android",
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "8",
        },
    },
    ios: {
        name: "Games For iOS",
        queryParams: {
            ordering: "-relevance",
            "parent-platforms": "4",
        },
    },
    action: {
        name: "Action Games",
        queryParams: {
            ordering: "-relevance",
            genres: "action",
        },
    },
    strategy: {
        name: "Strategy Games",
        queryParams: {
            ordering: "-relevance",
            genres: "strategy",
        },
    },
    rpg: {
        name: "RPG Games",
        queryParams: {
            ordering: "-relevance",
            genres: "role-playing-games-rpg",
        },
    },
    shooter: {
        name: "Shooter Games",
        queryParams: {
            ordering: "-relevance",
            genres: "shooter",
        },
    },
    adventure: {
        name: "Adventure Games",
        queryParams: {
            ordering: "-relevance",
            genres: "adventure",
        },
    },
    puzzle: {
        name: "Puzzle Games",
        queryParams: {
            ordering: "-relevance",
            genres: "puzzle",
        },
    },
    racing: {
        name: "Racing Games",
        queryParams: {
            ordering: "-relevance",
            genres: "racing",
        },
    },
    sports: {
        name: "Sports Games",
        queryParams: {
            ordering: "-relevance",
            genres: "sports",
        },
    },
};
