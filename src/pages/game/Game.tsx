import { useQuery } from "@tanstack/react-query";
import { getGameById } from "../../services/api/AllServices";
import { useLoaderData } from "react-router-dom";

import MediaQuery from "react-responsive";
import Loading from "../../components/common/Loading";
import GameHeader from "../../components/GameDescription/GameHeader";
import MediumScreen from "./MediumScreen";
import LargeScreen from "./LargeScreen";
import { IGame } from "../../types/IGame";

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
            <section className="flex flex-col main-padding !pt-[85px] w-full h-screen">
                <GameHeader />
                <div className="w-full h-full flex justify-center items-center">
                    <h1>Game Not Found</h1>
                </div>
            </section>
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
