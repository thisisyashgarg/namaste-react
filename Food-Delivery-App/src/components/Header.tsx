import { useState, useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../utils/UserContext";
import { useSelector } from "react-redux";
import Logo from "../images/foodify.svg";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          data-testid="logo"
          className="h-20 p-2 mx-2"
          alt="logo"
          src={Logo}
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
    <div className="flex justify-between items-center shadow-md bg-white fixed top-0 left-0 right-0">
      <Title />

      <div>
        <ul className="flex py-4 px-4 text-black">
          {/* <li className="px-2 hover:text-orange-400">
            <Link to="/">Home</Link>
          </li> */}
          {/* <li className="px-2 hover:text-orange-400">
            <Link to="/about">About</Link>
          </li> */}
          {/* <li className="px-2 hover:text-orange-400">
            <Link to="/contact">Contact</Link>
          </li> */}
          {/* <li className="px-2 hover:text-orange-400">
            <Link to="/about/profile">Profile</Link>
          </li> */}
          {/* <li className="px-2 hover:text-orange-400">
            <Link to="/instamart">Instamart</Link>
          </li> */}
          <li className="px-2 hover:text-orange-400 text-l font-medium">
            <Link to="/cart" data-testid="cart">
              🛒 ({cartItems.length})
            </Link>
          </li>

          <li className="px-2 text-black text-l font-medium ">{user.name}</li>

          {isLoggedIn === "true" ? (
            <li className="px-2 hover:text-orange-400 text-l font-medium">
              <button onClick={() => setIsLoggiedIn("false")}>Logout</button>
            </li>
          ) : (
            <li className="px-2 hover:text-orange-400 text-l font-medium">
              <button onClick={() => setIsLoggiedIn("true")}>Login</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
