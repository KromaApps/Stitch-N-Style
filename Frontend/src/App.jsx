import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChangePassword from "../src/components/Settings/ChangePassword";
import Notifications from "../src/components/Settings/Notifications";
import Privacy from "../src/components/Settings/Privacy";

import {
  Home,
  Contact,
  Cart,
  Checkout,
  OrderConfirmation,
  Settings,
  Profile,
} from "./pages/index";
import { Header, Footer } from "./components/index";

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
