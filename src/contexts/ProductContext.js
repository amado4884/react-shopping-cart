import React, { createContext, useState } from "react";
import data from "../data";
export const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([...data]);
  const addItem = (item) => {
    setProducts([...products, { ...item, itemId: Date.now() }]);
  };
  return <ProductContext.Provider value={{ products, addItem }}>{children}</ProductContext.Provider>;
};
