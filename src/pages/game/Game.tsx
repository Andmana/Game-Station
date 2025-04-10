import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { getGameById } from "../../services/api/AllServices";
import { IGame } from "../../types/IGame";
import CSection from "../../components/common/CSection";
import { dummyGame } from "../../utils/dummy";
import defaultImg from "../../assets/images/1.jpg";
import MediaQuery from "react-responsive";
import GameAbout from "./GameAbout";
import CButton from "../../components/common/CButton";
import GameDetail from "./GameDetail";
import CarouselV2 from "../../components/carousel/CarouselV2";

const fetchData = async (): Promise<IGame> => {
    return await getGameById(3489);
};

const Game = () => {
    // const { isPending, error, data } = useQuery({
    //     queryKey: ["game"],
    //     queryFn: fetchData,
    // });
    // console.log("data:", data);
    // if (isPending) return <div>HAHAHA</div>;
    return (
        <>
            <MediaQuery minWidth={1024}>
                <CSection customClass="main-padding !pt-[65px] flex flex-col overflow-y-hidden">
                    <div className="flex justify-between items-center text-4xl font-black pb-4 h-[60px]">
                        <div>Back</div>
                        <div>{dummyGame.name}</div>
                    </div>
                    <div className="flex-1 flex gap-4 overflow-y-hidden">
                        <div className="flex-2/3 rounded-xl overflow-hidden">
                            <CarouselV2 />
                        </div>
                        <article
                            className="h-full min-w-[400px] flex-1/3 overflow-y-auto rounded-xl flex flex-col gap-2 justify-between"
                            style={{
                                scrollbarWidth: "none",
                            }}
                        >
                            <div
                                className="overflow-y-scroll flex flex-col gap-3 text-neutral-400"
                                style={{ scrollbarWidth: "none" }}
                            >
                                <GameAbout game={dummyGame} />
                                <GameDetail game={dummyGame} />
                            </div>

                            <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient">
                                <span>${dummyGame.price}</span>
                                <CButton>+Chart</CButton>
                            </div>
                        </article>
                    </div>
                </CSection>
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
                <SmallDisplay />
            </MediaQuery>
        </>
    );
};

const SmallDisplay = () => {
    return (
        <section className="w-fulloverflow-hidden" style={{ marginTop: 65 }}>
            <div
                style={{
                    height: "calc(100vh - 65px)",
                }}
                className="flex flex-col justify-between gap-4  main-padding !pt-0 "
            >
                <div className="flex justify-between items-center text-4xl font-black ">
                    <div>Back</div>
                    <div>{dummyGame.name}</div>
                </div>

                <div className="bg-blue-500 flex-1 rounded-xl overflow-hidden">
                    <img
                        src={defaultImg}
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
                </div>

                <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient-top">
                    <span className="text-lg">${dummyGame.price}</span>
                    <CButton customClass="font-black">Add to Chart +</CButton>
                </div>
            </div>
            <article className="main-padding">
                <div
                    className="overflow-y-scroll flex flex-col gap-3 text-neutral-400"
                    style={{ scrollbarWidth: "none" }}
                >
                    <GameAbout game={dummyGame} />
                    <GameDetail game={dummyGame} />
                </div>
            </article>
        </section>
    );
};

export default Game;
