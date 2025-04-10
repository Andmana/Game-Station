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
import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../App";
import CartItems from "../../components/aside-cart/CartItems";

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
    const { addItemToCart, removeCartItem, isAddedToCart } =
        useContext(CartContext);

    return (
        <section className="w-fulloverflow-hidden" style={{ marginTop: 65 }}>
            <div
                style={{
                    height: "calc(100vh - 65px)",
                }}
                className="flex flex-col justify-between gap-4  main-padding !pt-0 "
            >
                <Header data={data} />

                <div className="flex-1 rounded-xl overflow-hidden">
                    <CarouselV2
                        images={data.screenshots?.map(
                            (screenshot) => screenshot.image
                        )}
                    />
                </div>

                <div className="text-2xl flex justify-between rounded-2xl  py-4 px-8 bg-custom-gradient-top">
                    <span className="text-lg">${data.price}</span>
                    <CButton
                        onClick={() =>
                            isAddedToCart(data.id)
                                ? removeCartItem(data.id)
                                : addItemToCart(data)
                        }
                        customClass="font-black"
                    >
                        {isAddedToCart(data.id)
                            ? "Remove from cart"
                            : "Add to Cart +"}
                    </CButton>
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
    const { addItemToCart, removeCartItem, isAddedToCart } =
        useContext(CartContext);
    return (
        <CSection customClass="main-padding !pt-[65px] gap-6 flex flex-col overflow-y-hidden">
            <Header data={data} />
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
                        <CButton
                            onClick={() =>
                                isAddedToCart(data.id)
                                    ? removeCartItem(data.id)
                                    : addItemToCart(data)
                            }
                            customClass="font-black"
                        >
                            {isAddedToCart(data.id)
                                ? "Remove from cart"
                                : "Add to Cart +"}
                        </CButton>
                    </div>
                </article>
            </div>
        </CSection>
    );
};

const Header = ({ data }: { data: IGame }) => {
    const navigate = useNavigate();
    return (
        <div className="flex justify-between items-start text-4xl font-black ">
            <CButton
                onClick={() => {
                    navigate(-1);
                }}
            >
                Back
            </CButton>
            <div className="flex-1 text-end">{data.name}</div>
        </div>
    );
};

export default Game;
