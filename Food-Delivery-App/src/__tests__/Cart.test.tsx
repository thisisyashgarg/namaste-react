import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { store } from "../utils/store";
import React from "react";
import { RESTAURANT_MENU_DATA } from "../mocks/mockData";
import "@testing-library/jest-dom";
import RestaurantMenu from "../components/RestaurantMenu";
import Header from "../components/Header";

//dummy fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_MENU_DATA);
    },
  });
});

test("add items to the cart", async () => {
  const resMenu = render(
    <StaticRouter location={"/shimmer"}>
      <Provider store={store}>
        <Header />
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(resMenu.getByTestId("menu")));
  const add = resMenu.getAllByTestId("add-btn");
  const cart = resMenu.getByTestId("cart");

  fireEvent.click(add[0]);
  expect(cart.innerHTML).toBe("Cart 🛒 (1)");
});
