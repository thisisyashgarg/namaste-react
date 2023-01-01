// PARCEL IS A BEAST
// creates a server
// uses HMR - Hot Module Replacing (live server feature)
// uses File Watcher Algorithm (in C++)
// minified the code, bundling
// clearing the console logs from code
// manages dev and prod build
// Image Optimisation
// caching while development
// compression
// compatible with older version of browsers
// https on dev
// manages the different port numbers
// consistent hashing algorithm
// zero config bundeler
//
///
// transitive dependencies

import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title1" },
  "Namaste React1 from Parcel"
);
const heading2 = React.createElement("h1", { id: "title2" }, "Namaste React2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
