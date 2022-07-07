import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCartList = () => {
  const { cartListItems, setCartListItems } = useContext(CartContext);
  const totalPrice = cartListItems
    .map(({ item: { precio }, quantity }) => ({ precio, quantity }))
    .reduce((total, { precio, quantity }) => total + precio * quantity, 0);
  return { cartListItems, setCartListItems, totalPrice };
};

export default useCartList;
