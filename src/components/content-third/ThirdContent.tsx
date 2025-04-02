import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import MediaQuery from "react-responsive";
import CSection from "../common/CSection";
import GameList from "./GameList";
import ErrorPage from "../../pages/ErrorPage";
import Loading from "../common/Loading";
import Carousel from "../carousel";
import CarouselItems from "./CarouselItems";

import { Game } from "../../types/game";
import { getGames } from "../../services/requests/apiRequest";

export interface CarouselData {
    name: string;
    games: Game[];
}

import { dummyData } from "../content-second/dummy";
const mockApi = async () => {
    return new Promise<CarouselData[]>((resolve) => {
        setTimeout(() => {
            resolve([
                { name: "Action", games: dummyData },
                { name: "Strategy", games: dummyData },
                { name: "Adventure", games: dummyData },
            ]);
        }, 500);
    });
};

const fetchTopGames = async () => {
    const genres = ["Action", "RPG", "Shooter"];
    const genresSlug = ["action", "role-playing-games-rpg", "shooter"];
    const gamePromises = genresSlug.map((slug) =>
        getGames({
            genres: slug,
            ordering: "-added",
            page_size: 5,
        })
    );

    const gameResults = await Promise.all(gamePromises);
    return gameResults.map((games, index) => ({
        name: genres[index],
        games,
    }));
};

const ThirdContent = () => {
    const isMock = true;
    const { data, error, isLoading } = useQuery<CarouselData[], Error>({
        queryKey: ["topByGenres"], // query key
        queryFn: isMock ? mockApi : fetchTopGames,
    });

    if (error) return <ErrorPage />;

    return (
        <CSection customClass="main-padding flex flex-col lg:flex-row justify-between items-stretch">
            <motion.div
                whileInView={{ translateX: 0, opacity: 1 }}
                initial={{ translateX: "-100%", opacity: 0 }}
                transition={{ ease: "linear", duration: 0.6, delay: 0.4 }}
                className="relative lg:bg-[#F87171] lg:flex-2/12 flex items-center justify-center "
            >
                <h1 className="text-center lg:!text-6xl transform text-vertical">
                    TOP BY GENRE
                </h1>
            </motion.div>

            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <MediaQuery minWidth={1024}>
                        <div className="flex-10/12 flex justify-around items-center main-padding text-xs  ">
                            {data && data.length > 0 && (
                                <>
                                    {data.map((item, index) => (
                                        <GameList
                                            key={index}
                                            genre={item.name}
                                            games={item.games}
                                        />
                                    ))}
                                </>
                            )}
                        </div>
                    </MediaQuery>

                    <MediaQuery maxWidth={1023}>
                        <div className="flex-10/12 lg:flex-10/12 flex justify-center items-center">
                            {data && data.length > 0 && (
                                <Carousel
                                    CarouselItems={CarouselItems}
                                    carouselData={data}
                                    itemsCount={data.length}
                                />
                            )}
                        </div>
                    </MediaQuery>
                </>
            )}
        </CSection>
    );
};

export default ThirdContent;
