import { useQuery } from "@tanstack/react-query";
import { getGameById } from "../../services/api/AllServices";
import { useLoaderData } from "react-router-dom";

import MediaQuery from "react-responsive";
import Loading from "../../components/common/Loading";
import ErrorPage from "../ErrorPage";
import MediumScreen from "./MediumScreen";
import LargeScreen from "./LargeScreen";
import { IGame } from "../../types/IGame";
import CSection from "../../components/common/CSection";
import GameHeader from "../../components/GameDescription/GameHeader";

const Game = () => {
    const id = useLoaderData() as string;
    const fetchData = async (): Promise<IGame> => {
        return await getGameById(id);
    };

    const { isPending, error, data } = useQuery<IGame | Error>({
        queryKey: ["game", id], // Include the game ID to ensure refetching
        queryFn: fetchData,
        refetchOnWindowFocus: true, // Refetch when the window regains focus
        enabled: !!id,
    });

    if (isPending) return <Loading customClass="absolute h-screen" />;
    if (error)
        return (
            <CSection customClass="flex flex-col main-padding !pt-[85px]">
                <GameHeader />
                <div className="w-full h-full flex justify-center items-center">
                    <h1>Game Not Found</h1>
                </div>
            </CSection>
        );
    return (
        <>
            <MediaQuery minWidth={1024}>
                <LargeScreen data={data as IGame} />
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
                <MediumScreen data={data as IGame} />
            </MediaQuery>
        </>
    );
};

export default Game;
