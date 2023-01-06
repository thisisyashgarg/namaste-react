import React from "react";
import ReactDOM from "react-dom";
import logo from "react-logo.png";
import profile from "user.png";

function Title() {
  return <h1>Title Component</h1>;
}
function Headings() {
  return (
    <h1 className="title">
      <Title />
      Hello
      <h2>
        This is
        <h3>Yash Garg</h3>
      </h2>
    </h1>
  );
}

function Header() {
  return (
    <div className="navbar">
      <img src={logo} width="60px" />
      <img src={logo} width="60px" />
      <img src={profile} width="60px" />
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
