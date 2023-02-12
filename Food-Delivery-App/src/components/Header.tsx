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
          data-testid="logo"
          className="h-16 p-2 rounded-full"
          alt="logo"
          src="http://localhost/dummyImage.png"
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
            <Link to="/cart" data-testid="cart">
              Cart ({cartItems.length})
            </Link>
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
