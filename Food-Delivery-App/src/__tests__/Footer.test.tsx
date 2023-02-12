import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { store } from "../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Footer from "../components/Footer";

test("footer should render all the data", () => {
  //load header
  const header = render(
    <StaticRouter location={"/footer"}>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );
  // console.log(header);
  const footer = header.getByTestId("footer");

  expect(footer.innerHTML).toBe("@ Created by Yash Garg");
});
