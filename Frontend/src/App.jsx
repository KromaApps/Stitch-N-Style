import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "../src/components/Settings/ChangePassword";
import Notifications from "../src/components/Settings/Notifications";
import Privacy from "../src/components/Settings/Privacy";
import Designers from "../src/components/Designers/Designers";
import {
  Home,
  Contact,
  Cart,
  Checkout,
  OrderConfirmation,
  Settings,
  Profile,
  DesignerProfile,
  CustomizationForm,
  LoginSignup,
} from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  const [customForm, setCustomForm] = useState(() => {
    const savedState = localStorage.getItem("customForm");
    return savedState === "true";
  });

  return (
    <>
      <BrowserRouter>
        <Header customForm={customForm} setCustomForm={setCustomForm} />
        <Routes>
          <Route path="/" element={<Home customForm={customForm} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/designers" element={<Designers />} />
          <Route path="/designers/:designerId" element={<DesignerProfile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/custom-form" element={<CustomizationForm />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
