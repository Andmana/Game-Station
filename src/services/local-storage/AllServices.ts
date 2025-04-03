import generateRandomPrice from "../../utils/randomPrice";
import { getFromLocalStorage, saveToLocalStorage } from "./LocalStorageService";

// Function to get the price of a game from localStorage based on its ID
export const getGamePrice = (gameId: number): number => {
    const storedData = getFromLocalStorage();

    // Find the game by its ID in the stored game prices
    const game = storedData.gamePrices.find((game) => game.id === gameId);

    // If the game price is found, return it, otherwise generate and save a new price
    return game ? game.price : generateAndSaveNewGamePrice(gameId);
};

// Function to generate a new price and save it in localStorage
const generateAndSaveNewGamePrice = (gameId: number): number => {
    const price = generateRandomPrice(); // Generate a random price
    const storedData = getFromLocalStorage(); // Get current stored data
    storedData.gamePrices.push({ id: gameId, price }); // Add the new game price to the list
    saveToLocalStorage(storedData);

    return price;
};
