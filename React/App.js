// transitive dependencies

import React from "react";
import ReactDOM from "react-dom/client";
const test = 10;

// Bad way of creating element
const headingReact = React.createElement(
  "h1",
  { id: "title1", key: "h1" },
  "Namaste React1 from Parcel"
);

// React Element
//good way by jsx
const headingJSX = (
  <h1 id="title" key="h1" tabIndex={1} className="title">
    Hello World
  </h1>
);

const HeadingJSX2 = () => {
  return (
    <h1 id="title" key="h2" tabIndex={1} className="title">
      Hello World
    </h1>
  );
};

// React Components - Functional(new) and Class Based Comp(old)

// Functional Comp, name starts with capital letter
const HeaderComponent = () => {
  return (
    <div>
      {headingJSX}
      {console.log(test)}
      {test}
      {HeadingJSX2()}
      <HeadingJSX2 />
      <h1>I am Functional Component</h1>
      <h2>I am H2 </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// this is used for react element
// root.render(headingJSX);

// this is for react components
root.render(<HeaderComponent />);
