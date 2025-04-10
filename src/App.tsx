import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/nav";
import AsideCart from "./components/aside-cart";
import { dummyGames } from "./utils/dummy";
import { IGame } from "./types/IGame";

export const CartContext = createContext({
    removeCartItem: (id: number) => {},
    addItemToCart: (game: IGame) => {},
    clearCartItems: () => {},
});

function App() {
    const [isCartVisible, setIsCardVisible] = useState(false);
    const [cartItems, SetCartItems] = useState([...dummyGames]);

    const handleCartState = () => [setIsCardVisible((prev: boolean) => !prev)];

    const removeCartItem = (id: number) =>
        SetCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

    const addItemToCart = (game: IGame) =>
        SetCartItems((prev) => {
            if (prev.some((item) => item.id === game.id)) return prev;
            else return [game, ...prev];
        });

    const clearCartItems = () => {
        SetCartItems([]);
    };

    return (
        <CartContext.Provider
            value={{ addItemToCart, clearCartItems, removeCartItem }}
        >
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
        </CartContext.Provider>
    );
}

export default App;
