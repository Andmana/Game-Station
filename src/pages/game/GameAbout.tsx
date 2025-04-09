import { motion, useCycle } from "framer-motion";
import { IGame } from "../../types/IGame";

const GameAbout = ({ game }: { game: IGame }) => {
    const [isCollapsed, toggleCollapse] = useCycle(true, false);

    const displayText = game.description_raw
        ? isCollapsed
            ? game.description_raw.slice(0, 400) + "... "
            : game.description_raw + " "
        : "Empty";

    return (
        <div className=" py-4 px-8 rounded-t-2xl bg-custom-gradient-bottom">
            <h2>About</h2>
            <p className="leading-snug">
                {displayText}
                {game.description_raw && game.description_raw.length > 400 && (
                    <motion.button
                        className="text-white"
                        onClick={() => toggleCollapse()}
                        whileHover={{ scale: 1.1 }}
                    >
                        {isCollapsed ? "Show More" : "Show Less"}
                    </motion.button>
                )}
            </p>
        </div>
    );
};

export default GameAbout;
