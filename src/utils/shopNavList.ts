import iconDefault from "../assets/images/icon-start.svg";
import { IShopNavGroup } from "../types/IShopNav";

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
            },
            {
                id: 1,
                name: "Upcoming",
                icon: iconDefault,
                redirectTo: "/upcoming",
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
            },
            {
                id: 1,
                name: `Popular in ${prevYear}`,
                icon: iconDefault,
                redirectTo: `/popular-in-prev-year`,
            },
            {
                id: 2,
                name: "All Time Top",
                icon: iconDefault,
                redirectTo: "/all-time-top",
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
            },
            {
                id: 1,
                name: "PlayStation",
                icon: iconDefault,
                redirectTo: "/playstation",
            },
            {
                id: 2,
                name: "Xbox",
                icon: iconDefault,
                redirectTo: "/xbox",
            },
            {
                id: 3,
                name: "Nintendo",
                icon: iconDefault,
                redirectTo: "/nintendo",
            },
            {
                id: 4,
                name: "Android",
                icon: iconDefault,
                redirectTo: "/android",
            },
            {
                id: 5,
                name: "IOS",
                icon: iconDefault,
                redirectTo: "/ios",
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
            },
            {
                id: 1,
                name: "Strategy",
                icon: iconDefault,
                redirectTo: "/strategy",
            },
            {
                id: 2,
                name: "RPG",
                icon: iconDefault,
                redirectTo: "/rpg",
            },
            {
                id: 3,
                name: "Shooter",
                icon: iconDefault,
                redirectTo: "/shooter",
            },
            {
                id: 4,
                name: "Adventure",
                icon: iconDefault,
                redirectTo: "/adventure",
            },
            {
                id: 5,
                name: "Puzzle",
                icon: iconDefault,
                redirectTo: "/puzzle",
            },
            {
                id: 6,
                name: "Racing",
                icon: iconDefault,
                redirectTo: "/racing",
            },
            {
                id: 7,
                name: "Sports",
                icon: iconDefault,
                redirectTo: "/sports",
            },
        ],
    },
];
