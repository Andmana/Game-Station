import { motion, Variants } from "framer-motion";
import CLink from "../common/CLink";
import { IGame } from "../../types/IGame";
import defaultImg from "../../assets/images/default.png";

interface GameListItemProps {
    game: IGame;
    variants: Variants;
}

const GameListItem = ({ game, variants }: GameListItemProps) => {
    return (
        <motion.div
            variants={variants}
            className="w-full flex justify-start text-[1rem] "
        >
            <CLink to={`/game/${game.id}`}>
                <motion.div className="flex gap-4">
                    <div
                        className="w-[70px] h-[80px] rounded-xl bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${
                                game.background_image || defaultImg
                            })`,
                        }}
                    ></div>
                    <div className="max-w-[220px] flex-1 self-stretch flex flex-col justify-center gap-2.5">
                        <span>{game.name}</span>
                        <span>${game.price}</span>
                    </div>
                </motion.div>
            </CLink>
        </motion.div>
    );
};

export default GameListItem;
