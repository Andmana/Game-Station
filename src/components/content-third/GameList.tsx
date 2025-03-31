import { motion } from "framer-motion";
import upcomingGames from "../carousel/dummy";
import GameListItem from "./GameListItem";

const itemVariants = {
    hidden: { opacity: 0, translateY: "-2rem" },
    visible: { opacity: 1, translateY: "0" },
};

const listVariants = {
    hidden: {
        opacity: 0,
        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.3,
            when: "afterChildren",
            staggerDirection: -1,
            staggerChildren: 0.1,
        },
    },
    visible: {
        opacity: 1,

        transition: {
            type: "spring",
            bounce: 0,
            duration: 0.4,
            delayChildren: 0.3,
            staggerChildren: 0.2,
        },
    },
};

interface GameListProps {
    isCarousel?: boolean;
}

const GameList = ({ isCarousel = false }: GameListProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listVariants}
            className={
                isCarousel
                    ? "w-full h-full shrink-0 flex flex-col flex-center items-stretch main-padding"
                    : ""
            }
        >
            <h2 className="md:mb-4 pointer-events-none text-start">GENRE</h2>
            <ul className="flex flex-col gap-4 justify-start ">
                {upcomingGames.map((item) => (
                    <GameListItem
                        key={item.id}
                        title={item.title}
                        image={item.image}
                        variants={itemVariants}
                    />
                ))}
            </ul>
        </motion.div>
    );
};

export default GameList;
