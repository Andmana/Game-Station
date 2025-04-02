import {
    IGameDetailResponse,
    IGameResultResponse,
} from "../types/IApiResponse";
import { IGame } from "../types/IGame";

export const mappingIGame = (target: IGameResultResponse): IGame => {
    const {
        id,
        name,
        slug,
        released,
        genres,
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
        background_image,
        platforms: parent_platforms?.map((item) => item.platform),
        contentRating: esrb_rating,
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
    };
};
