import { IGameDetailResponse, IGamesResponse } from "../types/IApiResponse";
import { mappingIGame, mappingIGameDetailed } from "../utils/mapping";
import { IGame } from "../types/IGame";
import { fetchData } from "./ApiService";
import {
    getCurrentDateIsoString,
    getOneYearLaterDateIsoString,
} from "../utils/formatDate";

// Function to fetch game details by ID
export const getGameById = async (GameId: number): Promise<IGame> => {
    const endpoint = `/games/${GameId}`;
    const responseData = await fetchData<IGameDetailResponse>(endpoint);

    const result = mappingIGameDetailed(responseData);
    return result;
};

// Helper function to fetch multiple games
export const getMultipleGames = async (
    queryParams: Record<string, unknown>
): Promise<IGame[]> => {
    const responseData = await fetchData<IGamesResponse>("/games", queryParams);

    const results: IGame[] = [];
    for (const rawData of responseData.results) {
        const data = mappingIGame(rawData);

        results.push(data);
    }

    return results;
};

export const getUpComingGames = async (): Promise<IGame[]> => {
    const queryParams = {
        ordering: "-added",
        dates: `${getCurrentDateIsoString()},${getOneYearLaterDateIsoString()}`,
        page_size: 10,
    };

    return getMultipleGames(queryParams);
};

export const getTopGamesByGenre = async (): Promise<
    { name: string; games: IGame[] }[]
> => {
    const genres = ["Action", "RPG", "Shooter"];
    const genreSlugs = ["action", "role-playing-games-rpg", "shooter"];

    // Fetch top games for each genre concurrently using Promise.all
    const gameResults = await Promise.all(
        genreSlugs.map((slug) =>
            getMultipleGames({
                genres: slug,
                ordering: "-added",
                page_size: 5,
            })
        )
    );

    // Return an array of objects with genre name and its top games
    return gameResults.map((games, index) => ({
        name: genres[index],
        games,
    }));
};
