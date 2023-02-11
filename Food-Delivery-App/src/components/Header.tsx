import { useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="h-16 p-2 rounded-full"
          alt="logo"
          src="data:image/jpeg;base64,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"
        />
      </a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggiedIn] = useState("true");

  const { user } = useContext(UserContext);

  const cartItems = useSelector(
    (store: { cart: { items } }) => store.cart.items
  );
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-gray-700 ">
      <Title />

      <div>
        <ul className="flex py-4 px-4 text-white">
          <li className="px-2 hover:text-orange-400">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 hover:text-orange-400">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 hover:text-orange-400">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 hover:text-orange-400">
            <Link to="/about/profile">Profile</Link>
          </li>
          <li className="px-2 hover:text-orange-400">
            <Link to="/instamart">Instamart</Link>
          </li>
          <li className="px-2 hover:text-orange-400">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>

          {isLoggedIn === "true" ? (
            <li className="px-2 hover:text-orange-400">
              <button onClick={() => setIsLoggiedIn("false")}>Logout</button>
            </li>
          ) : (
            <li className="px-2 hover:text-orange-400">
              <button onClick={() => setIsLoggiedIn("true")}>Login</button>
            </li>
          )}

          <li className="px-2 text-gray-300 ">{user.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
