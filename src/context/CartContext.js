import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartListItems, setCartListItems] = useState([]);

  const addItem = (item, quantity) => {
    console.log("item", item);
    const isInCart = cartListItems.some((i) => i.id === item.id);
    if (!isInCart) {
      const newItem = { item: item, quantity: quantity };
      setCartListItems((cartListItems) => [...cartListItems, newItem]);
    } else {
      alert("Ya tienes este producto en tu carrito");
    }
  };

  const removeItem = (item) => {
    setCartListItems(cartListItems.filter((i) => i.item.id !== item.item.id));
  };

  const clear = () => {
    setCartListItems([]);
  };

  const data = { cartListItems, addItem, removeItem, clear };

  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export { CartContext };
export default CartProvider;
