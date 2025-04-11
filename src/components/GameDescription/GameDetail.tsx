import { motion, useCycle } from "framer-motion";
import { IGame } from "../../types/IGame";
import { formatStringToReadableDate } from "../../utils/formatDate";
import iconUp from "../../assets/images/icon-up.svg";
import iconDown from "../../assets/images/icon-down.svg";

const GameDetail = ({ game }: { game: IGame }) => {
    const [isCollapsed, toggleCollapse] = useCycle(true, false);

    const renderList = (label: string, items: string[]) => {
        return (
            items.length > 0 && (
                <p className="flex gap-[1ch]">
                    <span>{label}:</span>
                    <span>{items.join(", ")}</span>
                </p>
            )
        );
    };

    return (
        <div className="flex flex-col gap-1 py-2 px-8 rounded-b-2xl bg-custom-gradient-top">
            <motion.div
                className="flex flex-col gap-1"
                initial={{ opacity: 0, height: 0 }}
                animate={{
                    opacity: isCollapsed ? 0 : 1,
                    height: isCollapsed ? 0 : "auto",
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                style={{ overflow: "hidden" }} // Ensure content is hidden when collapsed
            >
                {game.released && (
                    <p>Released: {formatStringToReadableDate(game.released)}</p>
                )}
                {game.contentRating && <p>Rating: {game.contentRating.name}</p>}
                {game.genres &&
                    renderList(
                        "Genres",
                        game.genres.map((genre) => genre.name)
                    )}
                {game.platforms &&
                    renderList(
                        "Platforms",
                        game.platforms.map((platform) => platform.name)
                    )}
                {game.developers &&
                    renderList(
                        "Developers",
                        game.developers.map((dev) => dev.name)
                    )}
                {game.publishers &&
                    renderList(
                        "Publisher",
                        game.publishers.map((publisher) => publisher.name)
                    )}
                {game.website && (
                    <a href={game.website}>
                        Website:{" "}
                        <span className="text-white underline underline-offset-2">
                            {game.website}
                        </span>
                    </a>
                )}
            </motion.div>

            <motion.button
                className="text-xl text-end w-full py-2.5 text-white font-semibold flex justify-end items-center gap-2"
                onClick={() => toggleCollapse()}
            >
                {isCollapsed ? "Show More" : "Show Less"}
                <img
                    src={isCollapsed ? iconDown : iconUp}
                    className="w-6 h-6"
                    alt=""
                />
            </motion.button>
        </div>
    );
};

export default GameDetail;
