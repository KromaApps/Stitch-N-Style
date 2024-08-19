import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ item, onAddToCart, cart = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(item.sizes?.[0] || ''); // Default to empty string if no sizes
  const [selectedColor, setSelectedColor] = useState(item.colors?.[0] || ''); // Default to empty string if no colors
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    if (!Array.isArray(cart)) {
      console.error('Cart is not an array:', cart);
      return;
    }
    
    // Check if the item is in the cart
    const found = cart.some(cartItem => cartItem.id === item.id);
    setIsInCart(found);
  }, [cart, item.id]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + (item.images || []).length) % (item.images || []).length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (item.images || []).length);
  };

  const handleAddToCart = () => {
    onAddToCart(item, selectedSize, selectedColor);
  };

  if (!item) {
    return <div>No product data available</div>;
  }

  if (!item.images || item.images.length === 0) {
    return <div>No images available</div>;
  }

  return (
    <div className="bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={item.images[currentIndex]}
          alt={item.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={handlePrevClick}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
        >
          &lt;
        </button>
        <button
          onClick={handleNextClick}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-2 rounded-full text-white hover:bg-gray-600"
        >
          &gt;
        </button>
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
        <p className="text-lg mb-4">{item.description}</p>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Sizes:</h3>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded"
          >
            {(item.sizes || []).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">Colors:</h3>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="bg-gray-700 text-white p-2 rounded"
          >
            {(item.colors || []).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddToCart}
          className={`w-full py-2 px-4 rounded ${
            isInCart ? 'bg-gray-600 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-500'
          }`}
          disabled={isInCart}
        >
          {isInCart ? 'In Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
  onAddToCart: PropTypes.func.isRequired,
  cart: PropTypes.array,
};

export default ProductCard;
