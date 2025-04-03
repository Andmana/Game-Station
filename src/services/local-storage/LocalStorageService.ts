import { ILocalStorage } from "../../types/ILocalStorage";
import { dummyGames } from "../../utils/dummy";

// Function to fetch game data from localStorage
export const getFromLocalStorage = (): ILocalStorage => {
    const storedData = localStorage.getItem("myGameStation");

    if (!storedData) return { gamePrices: [], cartItems: [...dummyGames] };
    // Return parsed data if available, otherwise return null
    return JSON.parse(storedData);
};

export const saveToLocalStorage = (data: ILocalStorage) => {
    localStorage.setItem("myGameStation", JSON.stringify(data));
};
