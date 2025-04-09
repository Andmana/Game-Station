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
        <CSection customClass="main-padding !pt-[65px] md:!pt-[85px] flex flex-col overflow-y-hidden">
            <div className="flex justify-between items-center text-4xl font-black pb-4 h-[60px]">
                <div>Back</div>
                <div>{dummyGame.name}</div>
            </div>
            <div className="flex-1 flex gap-4 overflow-y-hidden">
                <div className="bg-blue-500 flex-2/3 rounded-xl overflow-hidden">
                    <img
                        src={defaultImg}
                        alt=""
                        className="w-full h-full object-center object-cover"
                    />
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
    );
};

export default Game;
