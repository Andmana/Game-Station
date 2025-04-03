import { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

import CSection from "../common/CSection";
import Carousel from "../carousel";
import CarouselItems from "./CarouselItems";
import Loading from "../common/Loading";
import ErrorPage from "../../pages/ErrorPage";

import { mockGetMultipleGames } from "../../services/MockServices";
import { IGame } from "../../types/IGame";
import { getUpComingGames } from "../../services/AllServices";

const SecondContent = () => {
    const useMock = false;

    const containerRef = useRef(null);
    const contentRef = useRef(null);

    const { data, error, isLoading } = useQuery<IGame[], Error>({
        queryKey: ["games"], // query key
        queryFn: useMock ? mockGetMultipleGames : getUpComingGames,
    });

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"], // This starts the animation when the top of the container reaches the bottom of the viewport, and ends when the bottom reaches the top.
    });

    // Rotate transformations
    const rotateXContainer = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["80deg", "50deg", "10deg", "50deg", "85deg"]
    );

    const rotateXContent = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["70deg", "35deg", "0deg", "35deg", "80deg"]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0.5, 0.8, 1, 0.8, 0.5]
    );

    if (error) return <ErrorPage />;

    return (
        <CSection customClass="flex flex-col justify-center items-center main-padding">
            <div className="text-4xl top-5 transform">
                <h2>UP COMING</h2>
            </div>
            {isLoading ? (
                <Loading />
            ) : (
                <div className="relative  w-11/12 h-8/12 md:w-9/12 md:h-10/12 flex items-center justify-around ransform-3d perspective-distant perspective-origin-center">
                    <motion.div
                        ref={containerRef}
                        style={{ rotateX: rotateXContainer }}
                        className="absolute w-full h-full bg-amber-400 transform -translate-z-10 origin-bottom"
                    ></motion.div>
                    <motion.div
                        ref={contentRef}
                        style={{ rotateX: rotateXContent, opacity }}
                        className="absolute w-full h-full transform origin-bottom translate-z-3 p-1"
                    >
                        <Carousel
                            CarouselItems={CarouselItems}
                            itemsCount={data?.length}
                            carouselData={data}
                        />
                    </motion.div>
                </div>
            )}
        </CSection>
    );
};

export default SecondContent;
