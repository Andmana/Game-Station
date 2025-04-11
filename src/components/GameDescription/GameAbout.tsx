import { motion, useCycle } from "framer-motion";
import { IGame } from "../../types/IGame";

const GameAbout = ({ game }: { game: IGame }) => {
    const [isCollapsed, toggleCollapse] = useCycle(true, false);

    const displayText = () => {
        if (!game.description_raw) return "[Empty]"; // Return empty if no desc
        if (game.description_raw.length < 400) return game.description_raw; // No collapse when less
        if (isCollapsed) return game.description_raw.slice(0, 400) + "... "; // Sliced when more than and IsCollapse
        return game.description_raw + " ";
    };

    return (
        <div className=" py-4 px-8 rounded-t-2xl bg-custom-gradient-bottom">
            <h2>About</h2>
            <p className="leading-snug">
                {displayText()}

                {/* Add button collapse */}
                {game.description_raw && game.description_raw.length > 400 && (
                    <motion.button
                        className="text-white text-[0.9rem]"
                        onClick={() => toggleCollapse()}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                    >
                        {isCollapsed ? "read more" : "show less"}
                    </motion.button>
                )}
            </p>
        </div>
    );
};

export default GameAbout;
