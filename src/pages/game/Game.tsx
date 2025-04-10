import { useQuery } from "@tanstack/react-query";
import { getGameById } from "../../services/api/AllServices";
import { IGame } from "../../types/IGame";
import CSection from "../../components/common/CSection";
import MediaQuery from "react-responsive";
import GameAbout from "./GameAbout";
import CButton from "../../components/common/CButton";
import GameDetail from "./GameDetail";
import CarouselV2 from "../../components/carousel/CarouselV2";
import Loading from "../../components/common/Loading";
import ErrorPage from "../ErrorPage";
import { useLoaderData } from "react-router-dom";

const Game = () => {
    const id = useLoaderData() as string;
    const fetchData = async (): Promise<IGame> => {
        return await getGameById(id);
    };
    const { isPending, error, data } = useQuery<IGame | Error>({
        queryKey: ["game"],
        queryFn: fetchData,
    });

    if (isPending) return <Loading customClass="absolute" />;
    if (error) return <ErrorPage />;
    return (
        <>
            <MediaQuery minWidth={1024}>
                <LargeScreen data={data as IGame} />
            </MediaQuery>
            <MediaQuery maxWidth={1023}>
                <SmallDisplay data={data as IGame} />
            </MediaQuery>
        </>
    );
};

const SmallDisplay = ({ data }: { data: IGame }) => {
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
                    <div className="flex-1 text-end">{data.name}</div>
                </div>

                <div className="flex-1 rounded-xl overflow-hidden">
                    <CarouselV2
                        images={data.screenshots?.map(
                            (screenshot) => screenshot.image
                        )}
                    />
                </div>

                <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient-top">
                    <span className="text-lg">${data.price}</span>
                    <CButton customClass="font-black">Add to Chart +</CButton>
                </div>
            </div>
            <article className="main-padding">
                <div
                    className="overflow-y-scroll flex flex-col gap-3 text-neutral-400"
                    style={{ scrollbarWidth: "none" }}
                >
                    <GameAbout game={data} />
                    <GameDetail game={data} />
                </div>
            </article>
        </section>
    );
};

const LargeScreen = ({ data }: { data: IGame }) => {
    return (
        <CSection customClass="main-padding !pt-[65px] flex flex-col overflow-y-hidden">
            <div className="flex justify-between items-center text-4xl font-black pb-4 h-[60px]">
                <div>Back</div>
                <div className="flex-1 text-end">{data.name}</div>
            </div>
            <div className="flex-1 flex gap-4 overflow-y-hidden">
                <div className="flex-2/3 rounded-xl overflow-hidden">
                    <CarouselV2
                        images={data.screenshots?.map(
                            (screenshot) => screenshot.image
                        )}
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
                        <GameAbout game={data} />
                        <GameDetail game={data} />
                    </div>

                    <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient">
                        <span>${data.price}</span>
                        <CButton>+Chart</CButton>
                    </div>
                </article>
            </div>
        </CSection>
    );
};

export default Game;
