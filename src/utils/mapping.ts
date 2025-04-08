import { getGamePrice } from "../services/local-storage/AllServices";
import {
    IGameDetailResponse,
    IGameResultResponse,
    IGamesResponse,
} from "../types/IApiResponse";
import { IGame, IGames } from "../types/IGame";

export const mappingIGame = (target: IGameResultResponse): IGame => {
    const {
        id,
        name,
        slug,
        released,
        genres,
        tags,
        background_image,
        parent_platforms,
        esrb_rating,
    } = target;
    return {
        id,
        name,
        slug,
        released,
        genres,
        tags,
        background_image,
        platforms: parent_platforms?.map((item) => item.platform),
        contentRating: esrb_rating,
        price: getGamePrice(id),
    };
};

export const mappingIGameDetailed = (target: IGameDetailResponse): IGame => {
    const {
        id,
        name,
        slug,
        released,
        description,
        genres,
        tags,
        publishers,
        developers,
        background_image,
        parent_platforms,
        esrb_rating,
    } = target;
    return {
        id,
        name,
        slug,
        released,
        description,
        genres,
        tags,
        publishers,
        developers,
        background_image,
        platforms: parent_platforms?.map((item) => item.platform),
        contentRating: esrb_rating,
        price: getGamePrice(id),
    };
};

export const mappingIGames = (target: IGamesResponse): IGames => {
    const { count, previous, next, results } = target;
    const mappedGames: IGame[] = [];
    for (const item of results) {
        const mappedGame = mappingIGame(item);
        mappedGames.push(mappedGame);
    }

    return {
        count,
        previous,
        next,
        results: mappedGames,
    };
};
