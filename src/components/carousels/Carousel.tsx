import { motion, useMotionValue } from "framer-motion";
import upcomingGames from "./dummy";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

const Carousel = () => {
    const [currentIdx, setCurrentIdx] = useState(0);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setCurrentIdx((pv) => {
                    if (pv === upcomingGames.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, []);

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && currentIdx < upcomingGames.length - 1) {
            setCurrentIdx((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && currentIdx > 0) {
            setCurrentIdx((pv) => pv - 1);
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden">
            <motion.div
                className="w-full h-10/12 flex items-center active:cursor-grabbing"
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
                <CarouselItems currentIdx={currentIdx} items={upcomingGames} />
            </motion.div>
            <Dots currentIdx={currentIdx} setCurrentIdx={setCurrentIdx} />
        </div>
    );
};

interface CarouselItem {
    id: string | number; // assuming the id can be string or number
    image: string; // assuming the image property is a string URL
}

interface CarouselItemsProps {
    items: CarouselItem[];
    currentIdx: string | number;
}

const CarouselItems = ({ items, currentIdx }: CarouselItemsProps) => {
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

const Dots = ({
    currentIdx,
    setCurrentIdx,
}: {
    currentIdx: number;
    setCurrentIdx: Dispatch<SetStateAction<number>>;
}) => {
    return (
        <div id="dots" className="mt-4 flex w-full justify-center gap-2">
            {upcomingGames.map((_, idx) => {
                return (
                    <button
                        key={idx}
                        onClick={() => setCurrentIdx(idx)}
                        className={`h-3 w-3 rounded-full transition-colors ${
                            idx === currentIdx
                                ? "bg-neutral-50"
                                : "bg-neutral-500"
                        }`}
                    />
                );
            })}
        </div>
    );
};

export default Carousel;
