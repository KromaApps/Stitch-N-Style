import React, { useState, useEffect } from "react";
import clothingItems from "../services/api";

const ProductCard = ({ item, onAddToCart }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(item.colors[0]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + item.images.length) % item.images.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % item.images.length);
  };

  const handleAddToCart = () => {
    onAddToCart(item, selectedSize, selectedColor);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full p-6 bg-gradient-to-r from-black/50 to-black border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <h2 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white">
        {item.name}
      </h2>
      <div className="relative mb-4 w-56 h-56">
        <img
          src={item.images[currentIndex]}
          alt={item.name}
          className="w-full h-full object-cover rounded-lg shadow-md transition-opacity duration-300"
        />
        <div className="absolute inset-0 flex items-center justify-between">
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={handlePrevClick}
          >
            <svg
              className="w-4 h-4 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="bg-white rounded-full p-2 shadow-md hover:bg-gray-200 focus:outline-none"
            onClick={handleNextClick}
          >
            <svg
              className="w-4 h-4 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <p className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        Price:{" "}
        <span className="font-bold text-gray-600 dark:text-gray-400">
          ₹{item.price}
        </span>
      </p>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Description: {item.description}
      </p>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Material:{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {item.material}
        </span>
      </p>
      <p className="mb-2 text-gray-600 dark:text-gray-300">
        Stock:{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {item.stock}
        </span>
      </p>
      <div className="flex gap-8">
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Available Sizes:
          </h3>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {item.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Available Colors:
          </h3>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {item.colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button
        type="button"
        className="mt-4 px-6 py-2 text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

const Item = ({ searchItem }) => {
  const [sortedItems, setSortedItems] = useState(clothingItems);
  const [sortCriteria, setSortCriteria] = useState("name");
  const [filterSize, setFilterSize] = useState("");
  const [filterColor, setFilterColor] = useState("");

  useEffect(() => {
    let items = [...clothingItems];

    if (filterSize) {
      items = items.filter((item) => item.sizes.includes(filterSize));
    }

    if (filterColor) {
      items = items.filter((item) => item.colors.includes(filterColor));
    }

    if (searchItem) {
      items = items.filter((item) =>
        item.name.toLowerCase().includes(searchItem.toLowerCase())
      );
    }

    items.sort((a, b) => {
      if (sortCriteria === "price") {
        return a.price - b.price;
      } else if (sortCriteria === "name") {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });

    setSortedItems(items);
  }, [sortCriteria, filterSize, filterColor, searchItem]);

  const handleAddToCart = (item, selectedSize, selectedColor) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Create a unique identifier for each item variation
    const uniqueId = `${item.id}-${selectedSize}-${selectedColor}`;
    const existingItem = cart.find(
      (cartItem) => cartItem.uniqueId === uniqueId
    );

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({
        ...item,
        quantity: 1,
        selectedSize,
        selectedColor,
        uniqueId, // Add the unique identifier to each item
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <label htmlFor="sort" className="mr-2 text-white">
            Sort by:
          </label>
          <select
            id="sort"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            className="p-2 rounded-md"
          >
            <option value="name">Name</option>
            <option value="price">Price</option>
          </select>
        </div>
        <div>
          <label htmlFor="filterSize" className="mr-2 text-white">
            Filter by Size:
          </label>
          <select
            id="filterSize"
            value={filterSize}
            onChange={(e) => setFilterSize(e.target.value)}
            className="p-2 rounded-md"
          >
            <option value="">All</option>
            {Array.from(
              new Set(clothingItems.flatMap((item) => item.sizes))
            ).map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="filterColor" className="mr-2 text-white">
            Filter by Color:
          </label>
          <select
            id="filterColor"
            value={filterColor}
            onChange={(e) => setFilterColor(e.target.value)}
            className="p-2 rounded-md"
          >
            <option value="">All</option>
            {Array.from(
              new Set(clothingItems.flatMap((item) => item.colors))
            ).map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">
        {sortedItems.map((item) => (
          <div key={item.id} className="w-80 p-4">
            <ProductCard item={item} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
