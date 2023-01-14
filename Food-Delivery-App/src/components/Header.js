import { useState } from "react";

const Title = () => (
  <a href="/">
    <img
      className="logo"
      alt="logo"
      src="https://yt3.ggpht.com/ytc/AMLnZu_EC-ECXAxRAixWGEfMsE1rdSoetBHyxmLNdtCB=s900-c-k-c0x00ffffff-no-rj"
    />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggiedIn] = useState("true");
  return (
    <div className="header">
      <Title />

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isLoggedIn === "true" ? (
            <li>
              <button onClick={() => setIsLoggiedIn("false")}>Logout</button>
            </li>
          ) : (
            <li>
              <button onClick={() => setIsLoggiedIn("true")}>Login</button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
