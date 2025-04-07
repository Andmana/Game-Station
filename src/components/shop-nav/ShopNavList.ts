import iconDefault from "../../assets/images/icon-start.svg";
import { IShopNavGroup } from "../../types/IShopNav";

const date = new Date();
const prevYear = date.getFullYear() - 1;

export const ShopNavList: IShopNavGroup[] = [
    {
        name: "New Releases",
        shopNavs: [
            {
                id: 0,
                name: "Last 30 days",
                icon: iconDefault,
                redirectTo: "/last-30-days",
                hasSort: false,
            },
            {
                id: 1,
                name: "Upcoming",
                icon: iconDefault,
                redirectTo: "/upcoming",
                hasSort: true,
            },
        ],
    },
    {
        name: "Top",
        shopNavs: [
            {
                id: 0,
                name: "Best Of the Year",
                icon: iconDefault,
                redirectTo: "/best-of-the-year",
                hasSort: false,
            },
            {
                id: 1,
                name: `Popular in ${prevYear}`,
                icon: iconDefault,
                redirectTo: `/popular-in-prev-year`,
                hasSort: false,
            },
            {
                id: 2,
                name: "All Time Top",
                icon: iconDefault,
                redirectTo: "/all-time-top",
                hasSort: false,
            },
        ],
    },
    {
        name: "Platforms",
        shopNavs: [
            {
                id: 0,
                name: "PC",
                icon: iconDefault,
                redirectTo: "/pc",
                hasSort: true,
            },
            {
                id: 1,
                name: "PlayStation",
                icon: iconDefault,
                redirectTo: "/playstation",
                hasSort: true,
            },
            {
                id: 2,
                name: "Xbox",
                icon: iconDefault,
                redirectTo: "/xbox",
                hasSort: true,
            },
            {
                id: 3,
                name: "Nintendo",
                icon: iconDefault,
                redirectTo: "/nintendo",
                hasSort: true,
            },
            {
                id: 4,
                name: "Android",
                icon: iconDefault,
                redirectTo: "/android",
                hasSort: true,
            },
            {
                id: 5,
                name: "IOS",
                icon: iconDefault,
                redirectTo: "/ios",
                hasSort: true,
            },
        ],
    },
    {
        name: "Genres",
        shopNavs: [
            {
                id: 0,
                name: "Action",
                icon: iconDefault,
                redirectTo: "/action",
                hasSort: true,
            },
            {
                id: 1,
                name: "Strategy",
                icon: iconDefault,
                redirectTo: "/strategy",
                hasSort: true,
            },
            {
                id: 2,
                name: "RPG",
                icon: iconDefault,
                redirectTo: "/rpg",
                hasSort: true,
            },
            {
                id: 3,
                name: "Shooter",
                icon: iconDefault,
                redirectTo: "/shooter",
                hasSort: true,
            },
            {
                id: 4,
                name: "Adventure",
                icon: iconDefault,
                redirectTo: "/adventure",
                hasSort: true,
            },
            {
                id: 5,
                name: "Puzzle",
                icon: iconDefault,
                redirectTo: "/puzzle",
                hasSort: true,
            },
            {
                id: 6,
                name: "Racing",
                icon: iconDefault,
                redirectTo: "/racing",
                hasSort: true,
            },
            {
                id: 7,
                name: "Sports",
                icon: iconDefault,
                redirectTo: "/sports",
                hasSort: true,
            },
        ],
    },
];
