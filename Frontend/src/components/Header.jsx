import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import { CiShoppingCart } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const userNavigation = [
  { name: "Your Profile", to: "/profile" },
  { name: "Settings", to: "/settings" },
  { name: "Sign out", href: "#" },
];

const defaultUser = {
  name: "Afzal Shaikh",
  email: "tom@example.com",
  imageUrl:
    "https://th.bing.com/th?id=OIP.jixXH_Els1MXBRmKFdMQPAHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
};

const Header = ({ customForm, setCustomForm }) => {
  const [open, setOpen] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const user = JSON.parse(localStorage.getItem("user")) || defaultUser;

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setItemCount(
        cart.reduce((count, item) => count + (item.quantity || 0), 0)
      );
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const Logo = () => (
    <div className="md:w-5/12">
      <Link to="/">
        <h2 className="text-white cursor-pointer">S&S</h2>
      </Link>
    </div>
  );

  const MenuBar = () => (
    <Menu as="div" className="relative ml-3">
      <div>
        <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none">
          <span className="sr-only">Open user menu</span>
          <img
            className="h-8 w-8 rounded-full"
            src={user.imageUrl}
            alt={user.name}
          />
        </MenuButton>
      </div>
      <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <div className="p-1">
          {userNavigation.map((item) => (
            <MenuItem key={item.name}>
              {({ active }) => (
                <Link
                  to={item.to}
                  className={`block px-4 py-2 text-sm ${
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );

  return (
    <header className="sticky top-0 z-50 flex h-16 w-full items-center justify-between border-b border-gray-200 bg-black p-4">
      <div className="flex items-center">
        <Logo />
        <button
          type="button"
          className="ml-4 inline-flex items-center p-2 text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <GiHamburgerMenu className="h-6 w-6" />
        </button>
        <Sidebar open={open} setOpen={setOpen} />
      </div>
      <div>
        <button
          onClick={() => setCustomForm(false)}
          className={`${
            !customForm
              ? "bg-white text-black "
              : "bg-black text-white shadow-md hover:bg-gray-100"
          } border border-black py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
        >
          Ready-fit
        </button>
        <button
          onClick={() => setCustomForm(true)}
          className={`${
            customForm
              ? "bg-white text-black "
              : "bg-black text-white shadow-md hover:bg-gray-100"
          } border border-black py-2 px-4 rounded-lg transition duration-300 ease-in-out ml-2`}
        >
          Design Yours
        </button>
      </div>
      <div className="flex items-center">
        <Link
          to="/cart"
          className="relative p-2 text-gray-300 hover:text-white ml-4"
        >
          <CiShoppingCart className="h-8 w-8" />
          {itemCount > 0 && (
            <span className="absolute top-0 right-0 inline-flex items-center justify-center w-5 h-5 text-xs font-medium text-white bg-red-500 rounded-full">
              {itemCount}
            </span>
          )}
        </Link>
        <MenuBar />
      </div>
    </header>
  );
};

export default Header;
