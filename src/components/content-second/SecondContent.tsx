import { useRef } from "react";
import CSection from "../common/CSection";
import { useScroll, useTransform, motion } from "framer-motion";
import Carousel from "../carousel";
import CarouselItems from "./CarouselItems";
import upcomingGames from "../carousel/dummy";

const SecondContent = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

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

    return (
        <CSection customClass="flex justify-center items-center main-padding transform-3d perspective-distant perspective-origin-center">
            <div className="absolute text-4xl top-5 transform translate-y-1/2">
                <h2>UP COMING</h2>
            </div>
            <motion.div
                ref={containerRef}
                style={{ rotateX: rotateXContainer }}
                className="absolute w-11/12 h-8/12 md:w-9/12 md:h-10/12 bg-amber-400 transform -translate-z-10 origin-bottom"
            ></motion.div>
            <motion.div
                ref={contentRef}
                style={{ rotateX: rotateXContent, opacity }}
                className="absolute w-11/12 h-8/12 md:w-9/12 md:h-10/12 transform origin-bottom translate-z-3 p-1"
            >
                <Carousel
                    CarouselItems={CarouselItems}
                    itemsCount={upcomingGames.length}
                />
            </motion.div>
        </CSection>
    );
};

export default SecondContent;
