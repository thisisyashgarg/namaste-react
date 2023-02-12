import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom/server";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { store } from "../utils/store";
import React from "react";
import Body from "../components/Body";
import { RESTAURANT_DATA } from "../mocks/mockData";
import "@testing-library/jest-dom";

//dummy fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

test("shimmer should render on homepage", async () => {
  const body = render(
    <StaticRouter location={"/shimmer"}>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );

  const shimmer = body.getByTestId("shimmer");
  expect(shimmer.children.length).toBe(10);
});

test("restaurants should render on homepage", async () => {
  const body = render(
    <StaticRouter location={"/shimmer"}>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const resList = body.getByTestId("res-list");
  expect(resList.children.length).toBe(15);
});

test("search for string (food) on homepage", async () => {
  const body = render(
    <StaticRouter location={"/shimmer"}>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(() => expect(body.getByTestId("search-btn")));
  const input = body.getByTestId("search-input");
  const searchBtn = body.getByTestId("search-btn");
  const resList = body.getByTestId("res-list");

  //food will be typed
  fireEvent.change(input, {
    target: {
      value: "food",
    },
  });

  fireEvent.click(searchBtn);

  expect(resList.children.length).toBe(2);
});
