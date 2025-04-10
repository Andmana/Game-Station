import { IGame } from "../../types/IGame";
import { ILocalStorage } from "../../types/ILocalStorage";
import generateRandomPrice from "../../utils/randomPrice";
import { getFromLocalStorage, saveToLocalStorage } from "./LocalStorageService";

// Function to get the price of a game from localStorage based on its ID
export const getGamePrice = (gameId: number): number => {
    const storedData = getFromLocalStorage();
    const game = storedData.gamePrices.find((game) => game.id === gameId);

    // If the game doesn't exist or has no price, generate a new one
    if (!game) {
        return generateAndSaveNewGamePrice(gameId, storedData);
    }

    if (!game.price) {
        // If the game exists but has no price, regenerate it
        game.price = generateRandomPrice();
        saveToLocalStorage(storedData);
    }

    return game.price;
};

// Function to generate a new price and save it in localStorage
const generateAndSaveNewGamePrice = (
    gameId: number,
    storedData: ILocalStorage
): number => {
    const price = generateRandomPrice(); // Generate a random price
    storedData.gamePrices.push({ id: gameId, price }); // Add the new game price to the list
    saveToLocalStorage(storedData);

    return price;
};

export const getCartItems = (): IGame[] => {
    const storedData = getFromLocalStorage();
    return storedData.cartItems;
};

export const saveCartItemsToLocalStorage = (items: IGame[]) => {
    const storedData = getFromLocalStorage();
    storedData.cartItems = items;
    saveToLocalStorage(storedData);
};
