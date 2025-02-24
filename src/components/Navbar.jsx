import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import CartModal from "./CartModal";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Fake Store</h1>
      <button onClick={() => setIsOpen(true)} className="relative">
        Cart ({cart.length})
      </button>
      {isOpen && <CartModal setIsOpen={setIsOpen} />}
    </nav>
  );
};

export default Navbar;
