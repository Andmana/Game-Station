import { IGame } from "../types/IGame";
import { dummyGames } from "../utils/dummy";

export const mockGetMultipleGames = async () => {
    return new Promise<IGame[]>((resolve) => {
        setTimeout(() => {
            resolve(dummyGames);
        }, 2000);
    });
};

export const mockGetTopGamesByGenre = async () => {
    return new Promise<{ name: string; games: IGame[] }[]>((resolve) => {
        setTimeout(() => {
            resolve([
                { name: "Action", games: dummyGames },
                { name: "Strategy", games: dummyGames },
                { name: "Adventure", games: dummyGames },
            ]);
        }, 2000);
    });
};
