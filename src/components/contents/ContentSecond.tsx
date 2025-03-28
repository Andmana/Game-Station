import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";

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
        ["80deg", "50deg", "20deg", "50deg", "80deg"]
    );

    const rotateXContent = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["70deg", "35deg", "5deg", "35deg", "70deg"]
    );

    const opacity = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        [0, 0.5, 1, 0.5, 0]
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
                    className="absolute w-11/12 h-8/12 md:w-9/12 md:h-9/12 bg-amber-400 transform origin-bottom"
                ></motion.div>
                <motion.div
                    ref={contentRef}
                    style={{ rotateX: rotateXContent, opacity }}
                    className="absolute w-11/12 h-8/12 md:w-9/12 md:h-9/12 bg-red-400 transform origin-bottom translate-z-3"
                ></motion.div>
            </div>
        </SectionWrapper>
    );
};

export default ContentSecond;
