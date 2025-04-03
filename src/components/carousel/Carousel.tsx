import { motion, useMotionValue } from "framer-motion";
import { ComponentType, useEffect, useState } from "react";
import CarouselDots from "./CarouselDots";
import { SPRING_OPTIONS } from "../common/modules";

interface CarouselProps {
    CarouselItems: ComponentType<{ currentIdx: number; carouselData: unknown }>;
    itemsCount?: number;
    carouselData?: unknown;
}

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const Carousel = ({
    CarouselItems,
    itemsCount = 0,
    carouselData,
}: CarouselProps) => {
    const [currentIdx, setCurrentIdx] = useState(0);
    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setCurrentIdx((pv) => {
                    if (pv === itemsCount - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && currentIdx < itemsCount - 1) {
            setCurrentIdx((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && currentIdx > 0) {
            setCurrentIdx((pv) => pv - 1);
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <motion.div
                className="w-full h-11/12 flex items-center active:cursor-grabbing"
                drag="x"
                dragConstraints={{
                    left: 0,
                    right: 0,
                }}
                style={{
                    x: dragX,
                }}
                animate={{
                    translateX: `-${currentIdx * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
            >
                <CarouselItems
                    currentIdx={currentIdx}
                    carouselData={carouselData}
                />
            </motion.div>
            <CarouselDots
                currentIdx={currentIdx}
                itemsCount={itemsCount}
                setCurrentIdx={setCurrentIdx}
            />
        </div>
    );
};

export default Carousel;
