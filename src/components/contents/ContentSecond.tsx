import { useRef } from "react";
import SectionWrapper from "./SectionWrapper";
import { useScroll, useTransform, motion } from "framer-motion";

const ContentSecond = () => {
    const containerRef = useRef(null);
    const contentRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["end end", "start start"],
    });

    const rotateXContainer = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["80deg", "50deg", "20deg", "-20deg", "-50deg"]
    );

    const rotateXContent = useTransform(
        scrollYProgress,
        [0, 0.25, 0.5, 0.75, 1],
        ["70deg", "35deg", "5deg", "45deg", "-70deg"]
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
                    className="absolute w-8/12 h-8/12 bg-amber-400 trasnform origin-bottom "
                ></motion.div>
                <motion.div
                    ref={contentRef}
                    style={{ rotateX: rotateXContent, opacity }}
                    className="absolute w-8/12 h-8/12 bg-red-400 trasnform origin-bottom translate-z-2"
                ></motion.div>
            </div>
        </SectionWrapper>
    );
};

export default ContentSecond;
