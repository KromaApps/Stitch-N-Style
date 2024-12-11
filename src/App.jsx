import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Cart,
  Collection,
  Contact,
  CustomCloth,
  Designers,
  Home,
  Login,
  Orders,
  PlaceOrder,
  Policy,
  Product,
} from "./pages/index";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <SearchBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/custom-cloth" element={<CustomCloth />} />
        <Route path="/designers" element={<Designers />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
