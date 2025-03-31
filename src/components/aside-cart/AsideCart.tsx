import { motion } from "framer-motion";
import { SPRING_OPTIONS } from "../common/modules";
import CartItems from "./CartItems";
import CButton from "../common/CButton";

interface CartItem {
    id: number | string;
    title: string;
    image: string;
}

interface AsideCartProps {
    isCartVisible: boolean;
    cartItems: CartItem[];
    handleCartState?: () => void;
    removeCartItem: (id: number | string) => void;
    clearCartItems: () => void;
}

const AsideCart = ({
    isCartVisible,
    handleCartState,
    cartItems,
    removeCartItem,
    clearCartItems,
}: AsideCartProps) => {
    return (
        <motion.aside
            initial={{ opacity: 0 }}
            animate={{
                opacity: isCartVisible ? 1 : 0,
            }}
            style={{ pointerEvents: isCartVisible ? "auto" : "none" }}
            className="fixed z-20 w-full h-auto top-0 left-0 bg-[#0000006a] flex"
        >
            {/* Blank Space */}
            <div
                className="flex-1 bg-[#2424247c]"
                onClick={handleCartState}
            ></div>

            {/* Cart */}
            <motion.div
                initial={{ translateX: "100%", opacity: 0 }}
                animate={{
                    translateX: isCartVisible ? "0" : "100%",
                    opacity: isCartVisible ? 1 : 0,
                }}
                transition={SPRING_OPTIONS}
                className="bg-[#1c1c1c]  w-[85%] h-screen max-w-[400px] px-4 md:px-8 py-6 flex flex-col justify-between gap-4"
            >
                <div className=" h-[50px] flex justify-between items-center ">
                    <h1>Items : {cartItems.length}</h1>
                    <CButton onClick={clearCartItems}>Clear</CButton>
                </div>

                <CartItems
                    cartItems={cartItems}
                    removeCartItem={removeCartItem}
                />

                <div className=" h-[50px] flex justify-between items-center ">
                    <h1>Total : {cartItems.length}</h1>
                    <CButton>CheckOut</CButton>
                </div>
            </motion.div>
        </motion.aside>
    );
};

export default AsideCart;
