const heading1 = React.createElement("h1", { id: "title1" }, "Namaste React1");
const heading2 = React.createElement("h1", { id: "title2" }, "Namaste React2");
const container = React.createElement("div", { id: "container" }, [
  heading1,
  heading2,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
