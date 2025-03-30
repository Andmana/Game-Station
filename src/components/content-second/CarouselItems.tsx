import upcomingGames from "../carousel/dummy";
import { motion } from "framer-motion";
import { SPRING_OPTIONS } from "../common/modules";

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

export default CarouselItems;
