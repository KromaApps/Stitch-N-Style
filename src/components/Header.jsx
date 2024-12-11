import React, { useState, useEffect, useRef, useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import {
  FaRegUserCircle,
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaHistory,
} from "react-icons/fa";
import { GiShoppingBag, GiHamburgerMenu } from "react-icons/gi";
import { FiLogOut } from "react-icons/fi";
import { ShopContext } from "../context/ShopContext";

const Header = () => {
  const [visible, setVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  const { setShowSearch, showSearch, getCartCount } = useContext(ShopContext);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownItems = [
    { icon: <FaUser size={16} />, text: "My Profile", link: "/profile" },
    { icon: <GiShoppingBag size={16} />, text: "Orders", link: "/orders" },
    { icon: <FaHistory size={16} />, text: "Order History", link: "/history" },
    { icon: <FiLogOut size={16} />, text: "Logout", link: "/logout" },
  ];

  return (
    <div className="relative">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3 bg-white shadow-md font-medium sticky top-0 z-50">
        {/* Logo */}
        <Link to="/">
          <img
            src={assets.logo}
            className="w-36 cursor-pointer hover:opacity-90 transition-opacity"
            alt="Stitch & Style"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
          {["HOME", "CRAFT YOUR LOOK", "COLLECTION", "DESIGNERS"].map(
            (item) => (
              <NavLink
                key={item}
                to={`/${
                  item === "HOME" ? "" : item.toLowerCase().replace(/ /g, "-")
                }`}
                className={({ isActive }) => `
        flex flex-col items-center gap-1 hover:text-black transition-all duration-300
        ${isActive ? "text-black" : ""}
      `}
              >
                {({ isActive }) => (
                  <>
                    <p>{item}</p>
                    <hr
                      className={`
              w-4/5 border-none h-[2px] bg-black transition-transform duration-300
              ${isActive ? "scale-x-100" : "scale-x-0"}
            `}
                    />
                  </>
                )}
              </NavLink>
            )
          )}
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-0">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <FaSearch
              onClick={() => setShowSearch(!showSearch)}
              size={20}
              className="text-gray-600 hover:text-black transition-colors"
            />
          </button>

          {/* User Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <Link to={"/login"}>
              <button
                ref={buttonRef}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setDropdownVisible(!dropdownVisible)}
                onMouseEnter={() => setDropdownVisible(true)}
              >
                <FaRegUserCircle
                  size={20}
                  className="text-gray-600 hover:text-black transition-colors"
                />
              </button>
              <div
                className={`
                absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 overflow-hidden
                transform transition-all duration-200 origin-top-right
                ${
                  dropdownVisible
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                }
              `}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <div className="py-2">
                  {dropdownItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className={`
                      flex items-center gap-3 px-4 py-3 text-gray-700 hover:bg-gray-50
                      transition-colors duration-200 text-sm
                      ${
                        index !== dropdownItems.length - 1
                          ? "border-b border-gray-100"
                          : ""
                      }
                      ${
                        item.text === "Logout"
                          ? "text-red-600 hover:text-red-700"
                          : "hover:text-black"
                      }
                    `}
                    >
                      <span className="text-current">{item.icon}</span>
                      {item.text}
                    </Link>
                  ))}
                </div>
              </div>
            </Link>
          </div>

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FaShoppingCart
              size={20}
              className="text-gray-600 hover:text-black transition-colors"
            />
            <span className="absolute right-0 top-0 w-5 h-5 flex items-center justify-center bg-black text-white text-xs rounded-full">
              {getCartCount()}
            </span>
          </Link>

          {/* Hamburger Menu */}
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors sm:hidden"
            onClick={() => setVisible(!visible)}
          >
            <GiHamburgerMenu size={20} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {visible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-50 transition-opacity"
          onClick={() => setVisible(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 bg-white w-[280px] shadow-xl transform transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="p-4 border-b">
                <h2 className="text-lg font-semibold">Menu</h2>
              </div>
              <div className="flex flex-col p-4 gap-4">
                {["HOME", "CRAFT YOUR LOOK", "COLLECTION", "DESIGNERS"].map(
                  (item) => (
                    <NavLink
                      key={item}
                      to={`/${
                        item === "HOME"
                          ? ""
                          : item.toLowerCase().replace(/ /g, "-")
                      }`}
                      className={({ isActive }) => `
                      py-2 px-4 rounded-lg transition-colors
                      ${
                        isActive
                          ? "bg-gray-100 text-black"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                      onClick={() => setVisible(false)}
                    >
                      {item}
                    </NavLink>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;