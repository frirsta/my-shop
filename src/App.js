import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./components/products/Products";
import commerce from "./lib/commerce";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const handleAddToCart = async (productId, quantity, variant) => {
    const item = await commerce.cart.add(productId, quantity, variant);
    setCart(item.cart);
  };

  const handleUpdateCartQty = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };
  const handleRemoveFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  useEffect(() => {
    fetchProducts();
    console.log(products);
  }, []);
  return (
    <div>
  App
    </div>
  );
}

export default App;
