import { GameRequest, GamesRequest } from "../../types/api";
import { Game } from "../../types/game";
import {
    getCurrentDateIsoString,
    getOneYearLaterDateIsoString,
} from "../../utils/formatDate";
import { GetRequest } from "../api/api";

export const GetGameById = async (GameId: number): Promise<Game> => {
    const {
        id,
        name,
        description,
        released,
        background_image,
        parent_platforms,
        developers,
        genres,
        esrb_rating,
    } = await GetRequest<GameRequest>(`games/${GameId}`);

    return {
        id,
        name,
        description,
        released,
        background_image,
        platforms: parent_platforms.map((item) => item.platform),
        developers,
        genres,
        rating: esrb_rating,
    };
};

export const getUpcomingGames = async (): Promise<Game[]> => {
    const params = {
        ordering: "-added",
        dates: `${getCurrentDateIsoString()},${getOneYearLaterDateIsoString()}`,
        page_size: 10,
    };

    const response: GamesRequest = await GetRequest<GamesRequest>(
        "games",
        params
    );

    const data: Game[] = [];
    for (const game of response.results) {
        const {
            id,
            name,
            description,
            released,
            background_image,
            parent_platforms,
            developers,
            genres,
        } = game;
        const newEntry: Game = {
            id,
            name,
            description,
            released,
            background_image,
            platforms: parent_platforms.map((item) => item.platform),
            developers,
            genres,
        };

        data.push(newEntry);
    }

    return data;
};
