import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartModal = ({ setIsOpen }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-lg font-bold">Cart Items</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500 mt-2">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center mt-4">
              <img src={item.image} alt={item.title} className="h-12 w-12" />
              <p className="flex-1 ml-2">{item.title}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
        <button
          onClick={() => setIsOpen(false)}
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CartModal;
