import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import closeImage from "../../assets/images/icon-close.svg";

import { SPRING_OPTIONS } from "../common/modules";
import { IGame } from "../../types/IGame";
import { MouseEvent } from "react";

interface CartItemsProps {
    cartItems: IGame[];
    removeCartItem: (id: number) => void;
}

const CartItems = ({ cartItems, removeCartItem }: CartItemsProps) => {
    const handleRemoveItem = (event: MouseEvent, id: number) => {
        event.preventDefault();
        removeCartItem(id);
    };
    return (
        <motion.div
            className="w-full flex-1 flex flex-col gap-5 overflow-scroll"
            style={{ scrollbarWidth: "none" }}
        >
            <AnimatePresence>
                {cartItems.map((item) => (
                    <motion.div
                        key={item.id}
                        exit={{ opacity: 0, translateX: "100%" }}
                        transition={SPRING_OPTIONS}
                    >
                        <Link
                            to={`/game/${item.id}`}
                            className="relative w-full bg-[#242424] py-5 px-4 flex justify-between items-center gap-2 rounded-xl"
                        >
                            <motion.button
                                className="absolute top-2 right-2 h-6 w-6 p-1.5 bg-[#d1d1d157] rounded-[50%] flex justify-center items-center"
                                whileHover={{ scale: 1.2 }}
                                onClick={(event: MouseEvent) =>
                                    handleRemoveItem(event, item.id)
                                }
                            >
                                <img
                                    src={closeImage}
                                    alt=""
                                    aria-hidden="true"
                                ></img>
                            </motion.button>
                            <div
                                className="w-[80px] h-[100px] rounded-md bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${item.background_image})`,
                                }}
                            ></div>
                            <div className="flex-1 self-stretch flex flex-col justify-center gap-2.5 text-end">
                                <span className="text-[1.1rem] font-semibold">
                                    {item.name}
                                </span>
                                <span>${item.price}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default CartItems;
