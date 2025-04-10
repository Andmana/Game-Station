import { Outlet } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/nav";
import AsideCart from "./components/aside-cart";
import { dummyGames } from "./utils/dummy";

function App() {
    const [isCartVisible, setIsCardVisible] = useState(false);
    const [cartItems, SetCartItems] = useState([...dummyGames]);

    const handleCartState = () => [setIsCardVisible((prev: boolean) => !prev)];

    const removeCartItem = (id: number | string) => {
        SetCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    const clearCartItems = () => {
        SetCartItems([]);
    };

    return (
        <AnimatePresence>
            <div
                id="app"
                className="bg-dark relative min-h-screen text-white flex flex-col"
            >
                <Nav handleCartState={handleCartState} />
                <main className="min-h-screen relative">
                    <Outlet />
                </main>
                <AsideCart
                    isCartVisible={isCartVisible}
                    handleCartState={handleCartState}
                    cartItems={cartItems}
                    removeCartItem={removeCartItem}
                    clearCartItems={clearCartItems}
                />
            </div>
        </AnimatePresence>
    );
}

export default App;
