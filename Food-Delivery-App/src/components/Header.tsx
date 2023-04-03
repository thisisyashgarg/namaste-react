import { useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../images/foodify.svg";

const Title = () => {
  return (
    <Link to="/">
      <img data-testid="logo" className="h-20 p-2 mx-2" alt="logo" src={Logo} />
    </Link>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggiedIn] = useState("true");

  const { user } = useContext(UserContext);

  const cartItems = useSelector(
    (store: { cart: { items } }) => store.cart.items
  );

  return (
    <div className="flex justify-between items-center shadow-md bg-white fixed top-0 left-0 right-0">
      <Title />

      <div>
        <ul className="flex py-4 px-4 text-black">
          <li className="px-2 hover:text-orange-400 text-l font-medium">
            <Link to="/cart" data-testid="cart">
              Cart 🛒 ({cartItems.length})
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
