import React from "react";
import ReactDOM from "react-dom/client";
import Header from "../Food-Delivery-App/src/components/Header";

function AppLayout() {
  return {
    /***
     * header
     *    logo
     *    nav items (right side)
     *    cart
     * body
     *    search bar
     *    restaurant list
     *       card
     *         image, name, rating, cuisines,
     * footer
     *   links
     *   copyright
     */
  };
}
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);
