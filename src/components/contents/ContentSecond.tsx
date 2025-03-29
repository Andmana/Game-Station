import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";
import upcomingGames from "../carousel/dummy";
import Carousel, { SPRING_OPTIONS } from "../carousel/Carousel";

const ContentSecond = () => {
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
        <SectionWrapper>
            <div className="relative h-full w-full main-padding flex justify-center items-center transform-3d perspective-distant perspective-origin-center">
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
                    className="absolute w-11/12 h-8/12 md:w-9/12 md:h-10/12 transform origin-bottom translate-z-3"
                >
                    <Carousel
                        CarouselItems={CarouselItems}
                        itemsCount={upcomingGames.length}
                    />
                </motion.div>
            </div>
        </SectionWrapper>
    );
};

interface CarouselItemsProps {
    currentIdx: number;
}

const CarouselItems = ({ currentIdx }: CarouselItemsProps) => {
    const items = upcomingGames;
    return (
        <>
            {items.map((item) => (
                <motion.div
                    key={item.id}
                    style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    animate={{
                        scale: currentIdx === item.id ? 1 : 0.85,
                    }}
                    transition={SPRING_OPTIONS}
                    className="w-full h-full shrink-0 bg-neutral-800 rounded-xl object-cover"
                />
            ))}
        </>
    );
};

export default ContentSecond;
