import {
    IGameDetailResponse,
    IGameResultResponse,
    IPaginatedResponse,
} from "../../types/IApiResponse";
import {
    mappingIGame,
    mappingIGameDetailed,
    mappingIGames,
} from "../../utils/mapping";
import { IGame, IGames } from "../../types/IGame";
import { fetchData, fetchDataByUrl } from "./ApiService";
import {
    getCurrentDateIsoString,
    getOneYearLaterDateIsoString,
} from "../../utils/formatDate";
import { IScreenshots } from "../../types/shared";

// Function to fetch game details by ID
export const getGameById = async (
    slugOrId: string | number
): Promise<IGame> => {
    const endpoint = `/games/${slugOrId}`;
    const responseData = await fetchData<IGameDetailResponse>(endpoint);

    const screenshotsResponse = await fetchData<
        IPaginatedResponse<IScreenshots>
    >(endpoint + "/screenshots");

    const result = mappingIGameDetailed(responseData);
    result.screenshots = screenshotsResponse.results;
    return result;
};

// Helper function to fetch multiple games
export const getMultipleGames = async (
    queryParams: Record<string, unknown>
): Promise<IGame[]> => {
    const responseData = await fetchData<
        IPaginatedResponse<IGameResultResponse>
    >("/games", queryParams);

    const results: IGame[] = [];
    for (const rawData of responseData.results) {
        const data = mappingIGame(rawData);
        results.push(data);
    }

    return results;
};

export const getPaginatedGamesByParams = async (
    queryParams: Record<string, unknown>
): Promise<IPaginatedResponse<IGameResultResponse>> => {
    const responseData = await fetchData<
        IPaginatedResponse<IGameResultResponse>
    >("/games", queryParams);
    const mappedData: IGame[] = [];
    for (const rawData of responseData.results) {
        const data = mappingIGame(rawData);
        mappedData.push(data);
    }
    responseData.results = mappedData;
    return responseData;
};

export const getPaginatedGamesByUrl = async (url: string): Promise<IGames> => {
    const responseData = await fetchDataByUrl<
        IPaginatedResponse<IGameResultResponse>
    >(url);
    return mappingIGames(responseData);
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
