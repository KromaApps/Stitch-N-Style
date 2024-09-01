import React, { useState } from "react";
import { useParams } from "react-router-dom";
import designers from "../services/designersData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag, faStar } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import ProductCard from "../components/Designers/ProductCard";

const DesignerProfile = () => {
  const { designerId } = useParams();
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(null);
  const [cart, setCart] = useState([]);

  const designer = designers.find((d) => d.id === parseInt(designerId, 10));

  if (!designer)
    return <div className="text-center p-4 text-black">Designer not found</div>;

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleAddToCart = (item, selectedSize, selectedColor) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const uniqueId = `${item.id}-${selectedSize}-${selectedColor}`;
    const existingItem = cart.find(
      (cartItem) => cartItem.uniqueId === uniqueId
    );

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
      cart.push({
        ...item,
        size: selectedSize,
        color: selectedColor,
        quantity: 1,
        uniqueId,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    window.dispatchEvent(new CustomEvent("cartUpdated"));
  };

  return (
    <div className="bg-white text-black min-h-screen p-8">
      <header className="text-center mb-12">
        <div className="relative mx-auto mb-6">
          {designer.image && (
            <img
              src={designer.image}
              alt={designer.name || "Designer"}
              className="w-40 h-40 rounded-full mx-auto border-4 border-gray-700 shadow-xl object-cover"
            />
          )}
        </div>
        <h1 className="text-5xl font-extrabold mb-4">
          {designer.name || "No name available"}
        </h1>
        <p className="text-lg max-w-3xl mx-auto">
          {designer.bio || "No bio available"}
        </p>

        <div className="flex justify-center mt-6 space-x-6">
          <a
            href={designer.socialMedia?.instagram || "#"}
            className="text-pink-600 hover:text-pink-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-3xl" />
          </a>
          <a
            href={designer.socialMedia?.facebook || "#"}
            className="text-blue-600 hover:text-blue-400 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} className="text-3xl" />
          </a>
          <a
            href={designer.socialMedia?.twitter || "#"}
            className="text-blue-400 hover:text-blue-300 transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-3xl" />
          </a>
        </div>

        <div className="flex justify-center space-x-8 mt-8">
          <div className="text-center">
            <FontAwesomeIcon
              icon={faTag}
              className="text-blue-500 text-4xl mb-2"
            />
            <p className="text-xl font-semibold">
              {designer.collections?.length || 0}
            </p>
            <p>Collections</p>
          </div>
          <div className="text-center">
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-400 text-4xl mb-2"
            />
            <p className="text-xl font-semibold">
              {designer.featuredItems?.length || 0}
            </p>
            <p>Featured Items</p>
          </div>
        </div>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Collections</h2>
        {designer.collections?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {designer.collections.map((collection) => (
              <ProductCard
                key={collection.id}
                item={collection}
                onAddToCart={handleAddToCart}
                cart={cart}
              />
            ))}
          </div>
        ) : (
          <p>No collections available</p>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Featured Items</h2>
        {designer.featuredItems?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {designer.featuredItems.map((item) => (
              <ProductCard
                key={item.id}
                item={item}
                cart={cart}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          <p>No featured items available</p>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Reviews</h2>
        {designer.reviews?.length > 0 ? (
          designer.reviews.map((review) => (
            <div
              key={review.id}
              className="mb-6 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <p className="font-semibold mb-2">
                {review.author || "Anonymous"}:
              </p>
              <p>{review.text || "No review text"}</p>
            </div>
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Contact Designer</h2>
        <form onSubmit={handleMessageSubmit} className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="w-full p-3 border border-gray-700 rounded-lg bg-white text-black"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 border border-gray-700 rounded-lg bg-white text-black"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            rows="4"
            className="w-full p-3 border border-gray-700 rounded-lg bg-white text-black"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-black text-white font-semibold rounded-lg hover:bg-black/40"
          >
            Send Message
          </button>
          {success && (
            <p className="text-green-400">Message sent successfully!</p>
          )}
        </form>
      </section>
    </div>
  );
};

export default DesignerProfile;
