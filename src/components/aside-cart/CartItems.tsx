import { AnimatePresence, motion } from "framer-motion";
import generateRandomPrice from "../../utils/randomPrice";
import { Link } from "react-router-dom";
import CButton from "../common/CButton";
import closeImage from "../../assets/images/icon-close.svg";
import { SPRING_OPTIONS } from "../common/modules";

interface CartItem {
    id: number | string;
    title: string;
    image: string;
}

interface CartItemsProps {
    cartItems: CartItem[];
    removeCartItem: (id: number | string) => void;
}

const CartItems = ({ cartItems, removeCartItem }: CartItemsProps) => {
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
                            to="/"
                            className="relative w-full bg-[#242424] py-5 px-4 flex justify-between items-center gap-2 rounded-xl"
                        >
                            <div className="absolute top-2 right-2 h-6 w-6 p-1.5 bg-black rounded-[50%]">
                                <CButton
                                    onClick={() => removeCartItem(item.id)}
                                >
                                    <img
                                        src={closeImage}
                                        alt=""
                                        aria-hidden="true"
                                    ></img>
                                </CButton>
                            </div>
                            <div
                                className="w-[80px] h-[100px] rounded-md bg-center bg-cover"
                                style={{
                                    backgroundImage: `url(${item.image})`,
                                }}
                            ></div>
                            <div className="flex-1 self-stretch flex flex-col justify-center gap-2.5 text-end">
                                <span className="text-[1.1rem] font-semibold">
                                    {item.title}
                                </span>
                                <span>{generateRandomPrice()}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
};

export default CartItems;
