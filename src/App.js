import React from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <ProductList />
    </CartProvider>
  );
}

export default App;
