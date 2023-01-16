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
    <div>
      <h1 id="title" key="h2" tabIndex={1} className="title">
        Hello World, Functional h1
      </h1>
      <h2 id="title" key="h3" tabIndex={1} className="title">
        Hello World, Functional h2
      </h2>
    </div>
  );
};

// React Components - Functional(new) and Class Based Comp(old)

// Functional Comp, name starts with capital letter
const HeaderComponent = () => {
  return (
    <div>
      {headingJSX}
      {test}
      {HeadingJSX2()}
      {/* both are same */}
      <HeadingJSX2 />
      {<HeadingJSX2></HeadingJSX2>}
      {/* both are same */}
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
