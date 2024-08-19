import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  const DELIVERY_CHARGE = 50;
  const DISCOUNT_PERCENTAGE = 10;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemove = (uniqueId) => {
    const updatedCart = cartItems.filter((item) => item.uniqueId !== uniqueId);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);
  };

  const handleQuantityChange = (uniqueId, increment) => {
    const updatedCart = cartItems.map((item) => {
      if (item.uniqueId === uniqueId) {
        return {
          ...item,
          quantity: increment
            ? (item.quantity || 1) + 1
            : Math.max((item.quantity || 1) - 1, 1),
        };
      }
      return item;
    });
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    const event = new CustomEvent("cartUpdated");
    window.dispatchEvent(event);
  };

  const calculateSubtotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * (item.quantity || 1), 0)
      .toFixed(2);
  };

  const calculateDiscount = (subtotal) => {
    return ((subtotal * DISCOUNT_PERCENTAGE) / 100).toFixed(2);
  };

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const discount = parseFloat(calculateDiscount(subtotal));
    return (subtotal - discount + DELIVERY_CHARGE).toFixed(2);
  };

  return (
    <div className="bg-black/80 p-6 min-h-screen text-white">
      <h1 className="text-3xl mb-6">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div
              key={item.uniqueId} // Use uniqueId here
              className="flex justify-between items-center mb-4 p-4 border border-gray-700 rounded-lg"
            >
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-gray-400">Price: ₹{item.price}</p>
                <div className="flex items-center">
                  <button
                    onClick={() => handleQuantityChange(item.uniqueId, false)}
                    className="bg-gray-600 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>
                  <span className="mx-4 text-gray-400">
                    Quantity: {item.quantity || 1}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item.uniqueId, true)}
                    className="bg-gray-600 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>
                </div>
                <p className="text-gray-400">Color: {item.selectedColor}</p>
                <p className="text-gray-400">Size: {item.selectedSize}</p>
                <p className="text-gray-400">
                  Subtotal: ₹{(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
              <button
                onClick={() => handleRemove(item.uniqueId)} // Use uniqueId here
                className="bg-red-600 text-white px-4 py-2 rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex flex-col mt-6 space-y-4">
            <div className="flex justify-between">
              <span className="text-xl">Subtotal:</span>
              <span className="text-xl">₹{calculateSubtotal()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">
                Discount ({DISCOUNT_PERCENTAGE}%):
              </span>
              <span className="text-xl">
                -₹{calculateDiscount(calculateSubtotal())}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-xl">Delivery Charge:</span>
              <span className="text-xl">₹{DELIVERY_CHARGE}</span>
            </div>
            <div className="flex justify-between font-bold text-2xl">
              <span>Total:</span>
              <span>₹{calculateTotal()}</span>
            </div>
            <Link to="/checkout">
              <button className="bg-green-600 text-white px-6 py-2 rounded">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
