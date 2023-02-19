import { render } from "@testing-library/react";
import Header from "../components/Header";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on header render", () => {
  //load header
  const header = render(
    <StaticRouter location={"/logo"}>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);
  const logo = header.getByTestId("logo");
  expect(logo.getAttribute("src")).toBe("http://localhost/dummyImage.png");
});

test("cart should be empty on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter location={"/cart"}>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);
  const cart = header.getByTestId("cart");
  expect(cart.innerHTML).toBe("Cart 🛒 (0)");
});
