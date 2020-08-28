import React, { createContext, useState } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.itemId !== id));
  };
  return <CartContext.Provider value={{ cart, addItem, removeItem }}>{children}</CartContext.Provider>;
};
