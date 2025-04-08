/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useRef, useState } from "react";
import CSection from "../common/CSection";
import { IGame } from "../../types/IGame";
import {
    getPaginatedGamesByParams,
    getPaginatedGamesByUrl,
} from "../../services/api/AllServices";
import GamesGrid from "./GamesGrid";
import Loading from "../common/Loading";
import ErrorPage from "../../pages/ErrorPage";
import SortDropDown from "./SortDropDown";
import { useInView } from "framer-motion";

type GamesGaleryProps = {
    header: string;
    queryParams: Record<string, string>;
    hasSort: boolean;
    isReleased: boolean;
};

const GamesGalery = ({
    header,
    queryParams,
    hasSort,
    isReleased,
}: GamesGaleryProps) => {
    const [gameList, setGameList] = useState<IGame[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [hasNext, setHasNext] = useState<string | undefined>(undefined);
    const [currOrder, setCurrOrder] = useState(queryParams.ordering);

    const handleSortOrderChange = async (order: string) => {
        setCurrOrder(order);
    };

    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: false, initial: false });

    useEffect(() => {
        setIsLoading(true);
        let isMount = true;
        const fetchGames = async () => {
            try {
                const response = await getPaginatedGamesByParams({
                    ...queryParams,
                    ordering: currOrder,
                });
                if (isMount) {
                    setGameList(response.results);
                    setHasNext(response.next);
                }
                setIsError(false);
            } catch {
                setIsError(true);
                setGameList([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGames();
        return () => {
            isMount = false;
            setGameList([]);
            setIsLoading(false);
        };
    }, [currOrder]);

    useEffect(() => {
        setIsLoading(true);

        let isMount = true;
        const fetchGames = async () => {
            try {
                const response = await getPaginatedGamesByParams(queryParams);
                if (isMount) {
                    setGameList(response.results);
                    setHasNext(response.next);
                }
                setIsError(false);
            } catch {
                setIsError(true);
                setGameList([]);
            } finally {
                setIsLoading(false);
            }
        };
        fetchGames();
        return () => {
            isMount = false;
            setGameList([]);
            setIsLoading(false);
        };
    }, [header]);

    const loadMoreGames = async () => {
        if (hasNext && !isLoading) {
            setIsLoading(true);
            try {
                const response = await getPaginatedGamesByUrl(hasNext);
                setGameList((prev) => [...prev, ...response.results]);
                setHasNext(response.next);
                setIsError(false);
            } catch {
                setIsError(true);
                setGameList([]);
            } finally {
                setIsLoading(false);
            }
        }
    };
    useEffect(() => {
        if (isInView) loadMoreGames();
    }, [isInView]);

    if (isError) return <ErrorPage />;

    return (
        <CSection customClass="flex-1 !pt-[80px] sm:!pt-[100px] !h-auto flex flex-col gap-9">
            <h1 className="!text-6xl">{header}</h1>
            {hasSort && (
                <SortDropDown
                    currentSort={currOrder}
                    handleSortOrderChange={handleSortOrderChange}
                />
            )}
            <GamesGrid games={gameList} isReleased={isReleased} />

            {isLoading && <Loading />}
            <div ref={containerRef} className="h-2.5"></div>
        </CSection>
    );
};

export default GamesGalery;
