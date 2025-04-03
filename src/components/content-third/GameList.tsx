import { motion } from "framer-motion";
import GameListItem from "./GameListItem";
import { IGame } from "../../types/IGame";

const itemVariants = {
    hidden: { opacity: 0, translateY: -50 },
    visible: { opacity: 1, translateY: 0 },
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
    genre: string;
    games: IGame[];
}

const GameList = ({ isCarousel = false, genre, games }: GameListProps) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            variants={listVariants}
            className={
                isCarousel
                    ? "w-full h-full shrink-0 flex flex-col flex-center justify-center items-stretch py-2 px-4 sm:px-[30%]"
                    : ""
            }
        >
            <h2 className="md:mb-4 pointer-events-none text-start">{genre}</h2>
            <ul className="flex flex-col gap-4 justify-start ">
                {games.map((item) => (
                    <GameListItem
                        key={item.id}
                        gameName={item.name}
                        gameImage={item.background_image}
                        variants={itemVariants}
                    />
                ))}
            </ul>
        </motion.div>
    );
};

export default GameList;
