import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const useCartList = () => {
  const { cartListItems, setCartListItems } = useContext(CartContext);

  const isEmpty = Boolean(cartListItems.length);
  const containElement = (element) =>
    cartListItems.some(({ item: { id } }) => element === id);
  const addItem = (disc, quantity) => {
    const isInCart = containElement(disc.id);

    if (!isInCart) {
      const newItem = { item: disc, quantity: quantity };
      setCartListItems((oldState) => [...oldState, newItem]);
    }
    return isInCart;
  };

  const pricePerProduct = cartListItems.reduce(
    (total, { quantity, precio }) => total + quantity * precio,
    0
  );
  // const totalPrice = pricePerProduct * cartListItems.length;

  const totalPrice = cartListItems
    .map(({ item: { precio }, quantity }) => ({ precio, quantity }))
    .reduce((total, { precio, quantity }) => total + precio * quantity, 0);

  const removeItem = (deleteId) => {
    const newList = cartListItems.filter(({ item: { id } }) => id !== deleteId);
    setCartListItems(newList);
  };
  const clear = () => setCartListItems([]);

  return {
    cartListItems,
    setCartListItems,
    totalPrice,
    pricePerProduct,
    removeItem,
    clear,
    addItem,
    isEmpty,
    containElement,
  };
};

export default useCartList;
