import { Outlet } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Nav from "./components/nav";
import AsideCart from "./components/aside-cart";
import { IGame } from "./types/IGame";
import {
    getCartItems,
    saveCartItemsToLocalStorage,
} from "./services/local-storage/AllServices";

// Define the type for the context value
interface CartContextType {
    cartItems: IGame[];
    removeCartItem: (id: number) => void;
    addItemToCart: (game: IGame) => void;
    isAddedToCart: (id: number) => boolean;
    clearCartItems: () => void;
}

// Create the context with a default value of the correct type
export const CartContext = createContext<CartContextType>({
    cartItems: [], // Empty array, but typed as IGame[]
    removeCartItem: () => {},
    addItemToCart: () => {},
    clearCartItems: () => {},
    isAddedToCart: () => true,
});

function App() {
    const [isCartVisible, setIsCardVisible] = useState(false);
    const [cartItems, SetCartItems] = useState([...getCartItems()]);

    const handleCartState = () => [setIsCardVisible((prev: boolean) => !prev)];

    const removeCartItem = (id: number) =>
        SetCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

    const addItemToCart = (game: IGame) =>
        SetCartItems((prev) => {
            if (prev.some((item) => item.id === game.id)) return prev;
            else return [game, ...prev];
        });

    const isAddedToCart = (id: number): boolean => {
        return cartItems.some((item) => item.id === id);
    };

    const clearCartItems = () => {
        SetCartItems([]);
    };

    useEffect(() => {
        saveCartItemsToLocalStorage(cartItems);
    }, [cartItems]);

    return (
        <CartContext.Provider
            value={{
                addItemToCart,
                clearCartItems,
                removeCartItem,
                cartItems,
                isAddedToCart,
            }}
        >
            <AnimatePresence>
                <div
                    id="app"
                    className="bg-dark relative min-h-screen text-white flex flex-col"
                >
                    <Nav
                        handleCartState={handleCartState}
                        cartItems={cartItems}
                    />
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
