/* eslint-disable @typescript-eslint/no-unused-vars */
import {
    getPaginatedGamesByParams,
    getPaginatedGamesByUrl,
} from "../../services/api/AllServices";
import { IGame } from "../../types/IGame";
import CSection from "../common/CSection";
import SortDropDown from "./SortDropDown";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import GamesGrid from "./GamesGrid";
import Loading from "../common/Loading";
import ErrorPage from "../../pages/ErrorPage";

type GamesGaleryProps = {
    header: string;
    queryParams: Record<string, string>;
    hasSort: boolean;
    isReleased: boolean;
    handleSortOrderChange: (order: string) => void;
};

const GamesGalery = ({
    header,
    queryParams,
    hasSort,
    isReleased,
    handleSortOrderChange,
}: GamesGaleryProps) => {
    console.log("isReleased :", isReleased);
    const [gameList, setGameList] = useState<IGame[]>([]);
    const [hasNext, setHasNext] = useState<string | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const container = useRef(null);
    const isInView = useInView(container, {
        once: false,
        initial: false,
    });

    useEffect(() => {
        let isMounted = true;
        const fetchGamesList = async () => {
            try {
                const response = await getPaginatedGamesByParams(queryParams);
                if (isMounted) {
                    setGameList(response.results);
                    setIsError(false);
                    setHasNext(response.next);
                }
            } catch (err) {
                if (isMounted) {
                    setIsError(true);
                    setGameList([]);
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchGamesList();

        return () => {
            isMounted = false;
            setGameList([]);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [header, queryParams.ordering]);

    useEffect(() => {
        if (isInView && hasNext) {
            setIsLoading(true);
            const fetchGamesList = async () => {
                try {
                    const response = await getPaginatedGamesByUrl(hasNext);
                    setGameList([...gameList].concat(response.results));
                    setHasNext(response.next);
                    setIsError(false);
                } catch (err) {
                    setIsError(true);
                    setGameList([]);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchGamesList();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);

    if (isError) return <ErrorPage />;

    return (
        <CSection customClass="flex-1 !pt-[80px] sm:!pt-[100px] !h-auto flex flex-col gap-9">
            <h1 className="!text-6xl">{header}</h1>

            {hasSort && (
                <SortDropDown
                    currentSort={queryParams.ordering}
                    handleSortOrderChange={handleSortOrderChange}
                />
            )}

            <GamesGrid games={gameList} isReleased={isReleased} />

            {isLoading && <Loading />}

            <div ref={container} className="h-2.5"></div>
        </CSection>
    );
};
export default GamesGalery;
