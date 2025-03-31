import { useEffect, useRef, useState } from "react";
import generateRandomPrice from "../../utils/randomPrice";
import CLink from "../common/CLink";
import { useInView, motion } from "framer-motion";

interface GameListItemProps {
    title: string;
    image: string;
    index: number;
}

const GameListItem = ({ title, image, index }: GameListItemProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const [appearOnce, setAppearOnce] = useState(false);

    useEffect(() => {
        if (!appearOnce && isInView) {
            setAppearOnce(true);
        }
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50,
                transition: {
                    delay: appearOnce ? 0.2 : index * 0.2,
                    duration: 0.6,
                },
            }}
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
