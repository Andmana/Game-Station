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
                redirectTo: "/",
                hasSort: false,
            },
            {
                id: 1,
                name: "Upcoming",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: false,
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
                redirectTo: "/",
                hasSort: false,
            },
            {
                id: 1,
                name: `Popular in ${prevYear}`,
                icon: iconDefault,
                redirectTo: "/",
                hasSort: false,
            },
            {
                id: 2,
                name: "All Time Top",
                icon: iconDefault,
                redirectTo: "/",
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
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 1,
                name: "PlayStation",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 2,
                name: "Xbox",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 3,
                name: "Nintendo",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 4,
                name: "Android",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 5,
                name: "IOS",
                icon: iconDefault,
                redirectTo: "/",
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
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 1,
                name: "Strategy",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 2,
                name: "RPG",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 3,
                name: "Shooter",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 4,
                name: "Adventure",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 5,
                name: "Puzzle",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 6,
                name: "Racing",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
            {
                id: 7,
                name: "Sports",
                icon: iconDefault,
                redirectTo: "/",
                hasSort: true,
            },
        ],
    },
];
