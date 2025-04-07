/* eslint-disable @typescript-eslint/no-unused-vars */
import CSection from "../common/CSection";
import { queryConfig } from "./ApiGamesQueries";
import GamesGrid from "./GamesGrid";
import SortDropDown from "./SortDropDown";
import { IGame } from "../../types/IGame";
import { useEffect, useState } from "react";
import { getMultipleGames } from "../../services/api/AllServices";
import Loading from "../common/Loading";
import ErrorPage from "../../pages/ErrorPage";

type GamesGaleryProps = {
    filters: string;
};

const GamesGalery = ({ filters }: GamesGaleryProps) => {
    const [gameList, setGameList] = useState<IGame[]>([]);
    const [isError, setIsError] = useState<Error | null>(null); // Correct type for Error
    const [isLoading, setIsLoading] = useState(true);
    const [queryParams, setQueryParams] = useState<Record<string, string>>({
        ...(queryConfig[filters].queryParams as Record<string, string>),
        page_size: "10",
    });

    useEffect(() => {
        setIsLoading(true);
        const initialFetch = async () => {
            try {
                const games = await getMultipleGames(queryParams);
                setGameList(games);
                setIsError(null);
            } catch (err) {
                setIsError(
                    err instanceof Error
                        ? err
                        : new Error("An unknown error occurred")
                );
            } finally {
                setIsLoading(false);
            }
        };
        console.log("re render");

        initialFetch();
    }, [filters]);

    return (
        <CSection customClass="flex-1 !pt-[80px] sm:!pt-[100px] !h-auto flex flex-col gap-9">
            <h1 className="!text-6xl">{queryConfig[filters].name as string}</h1>
            <SortDropDown />
            <GamesGrid games={gameList} />
            {isLoading && <Loading />}
            {isError && <ErrorPage />}
        </CSection>
    );
};
export default GamesGalery;
