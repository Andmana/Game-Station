import generateRandomPrice from "../../utils/randomPrice";
import CLink from "../common/CLink";
import { motion, Variants } from "framer-motion";

interface GameListItemProps {
    title: string;
    image: string;
    variants: Variants;
}

const GameListItem = ({ title, image, variants }: GameListItemProps) => {
    return (
        <motion.div
            variants={variants}
            className="w-full flex justify-start text-[1rem]"
        >
            <CLink to="/shop">
                <motion.div className="flex gap-4">
                    <div
                        className="w-[70px] h-[80px] rounded-xl bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                    <div className="flex-1 self-stretch flex flex-col justify-center gap-2.5">
                        <span>{title}</span>
                        <span>{generateRandomPrice()}</span>
                    </div>
                </motion.div>
            </CLink>
        </motion.div>
    );
};

export default GameListItem;
