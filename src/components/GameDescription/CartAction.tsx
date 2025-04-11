import { IGame } from "../../types/IGame";
import { useContext } from "react";
import { CartContext } from "../../App";
import CButton from "../common/CButton";

interface CartActionProps {
    label: string;
    data: IGame;
}

const CartAction = ({ label, data }: CartActionProps) => {
    const { addItemToCart, removeCartItem, isAddedToCart } =
        useContext(CartContext);

    return (
        <>
            <span className="text-lg font-bold">$ {data.price}</span>
            <CButton
                onClick={() =>
                    isAddedToCart(data.id)
                        ? removeCartItem(data.id)
                        : addItemToCart(data)
                }
                customClass="font-black"
            >
                {isAddedToCart(data.id) ? "Remove from cart" : label}
            </CButton>
        </>
    );
};

export default CartAction;
