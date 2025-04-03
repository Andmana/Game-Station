import { motion } from "framer-motion";
import { SPRING_OPTIONS } from "../common/modules";
import { platformIcons } from "../../utils/platformIcons";
import { formatStringToReadableDate } from "../../utils/formatDate";
import { IGame } from "../../types/IGame";

interface CarouselItemsProps {
    currentIdx: number;
    carouselData?: unknown;
}

const CarouselItems = ({ currentIdx, carouselData }: CarouselItemsProps) => {
    const data = carouselData as IGame[];
    return (
        <>
            {data.map((item) => (
                <motion.div
                    key={item.id}
                    style={{
                        backgroundImage: `url(${item.background_image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backdropFilter: "blur(100px)",
                    }}
                    animate={{
                        scale: currentIdx === item.id ? 1 : 0.85,
                    }}
                    transition={SPRING_OPTIONS}
                    className="w-full h-full shrink-0 bg-neutral-800 rounded-xl object-cover flex justify-center items-end overflow-hidden backdrop-blur-3xl"
                >
                    <div className="w-full z-10 flex flex-col justify-center items-center text-center main-padding bg-custom gap-1 pt-16 pointer-events-none">
                        <h2 className="!text-2xl mb-1">{item.name}</h2>
                        <div className="flex gap-2">
                            {item.platforms?.map((item, index) => {
                                if (!(item.slug in platformIcons)) return;
                                return (
                                    <img
                                        key={index}
                                        src={platformIcons[item.slug]}
                                        className="h-6 w-6 object-cover bg-no-repeat bg-center bg-cover"
                                        alt={item.name}
                                    />
                                );
                            })}
                        </div>
                        <span className="text-xl font-semibold">
                            {item.genres?.map((genre) => genre.name).join(", ")}
                        </span>
                        <span className="text-xl font-semibold">
                            {item.released &&
                                formatStringToReadableDate(item.released)}
                        </span>
                    </div>
                </motion.div>
            ))}
        </>
    );
};

export default CarouselItems;
