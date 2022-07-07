import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [discos, setDiscos] = useState([]);
  const [cartListItems, setCartListItems] = useState([]);
  const [purchasedMode, setPurchasedMode] = useState(false);
  // const [itemsPurchased, setItemsPurchased] = useState([]);

  const addItem = (disc, quantity) => {
    const isInCart = cartListItems.some(({ item: { id } }) => id === disc.id);
    if (!isInCart) {
      const newItem = { item: disc, quantity: quantity };
      setCartListItems((oldState) => [...oldState, newItem]);
      setPurchasedMode(true);
    } else {
      alert("Ya tienes este producto en tu carrito");
    }
  };

  const removeItem = (id) => {
    setCartListItems(cartListItems.filter((i) => i.item.id !== id));
    if ((cartListItems.length = 1)) {
      setPurchasedMode(false);
    }
  };

  const clear = () => {
    setCartListItems([]);
    setPurchasedMode(false);
  };

  const data = {
    loading,
    setLoading,
    discos,
    setDiscos,
    cartListItems,
    setCartListItems,
    addItem,
    removeItem,
    clear,
    purchasedMode,
    setPurchasedMode,
    // itemsPurchased,
    // purchasedItem,
    // setItemsPurchased,
  };

  // eslint-disable-next-line react/react-in-jsx-scope
  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

// const useCartList = useContext()
export { CartContext };
export default CartProvider;
