import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { UserContext } from "./utils/UserContext";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";

import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { Provider } from "react-redux";
import { store } from "./utils/store";
const Instamart = lazy(() => import("./components/Instamart"));
// suspending happpens and error is thrown because react tries to render component before

const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Yash Garg",
    email: "yash.garg@gmail.com",
  });
  return (
    <Provider store={store}>
      {/* <UserContext.Provider
        value={{
          user: user,
          setUser: setUser,
        }}
      > */}
      <Header />
      <Outlet />
      {/* <Footer /> */}
      {/* </UserContext.Provider> */}
    </Provider>
  );
};

//Client side routing(our server) and server side routing
//nested routong
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    // all children go into outlet
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
