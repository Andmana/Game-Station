import { Outlet } from "react-router-dom";
import Nav from "./components/nav";
import { useState } from "react";
import upcomingGames from "./components/carousel/dummy";
import { AnimatePresence } from "framer-motion";
import AsideCart from "./components/aside-cart";

function App() {
    const [isCartVisible, setIsCardVisible] = useState(false);
    const [cartItems, SetCartItems] = useState([...upcomingGames]);

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
                <main className="isolate">
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
