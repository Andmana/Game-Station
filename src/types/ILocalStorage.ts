import { IGame } from "./IGame";

export interface GamePrice {
    id: number;
    price: number;
}

export interface ILocalStorage {
    gamePrices: GamePrice[];
    cartItems: IGame[];
}
