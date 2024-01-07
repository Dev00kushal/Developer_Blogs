import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.tsx";
import Error from "./Error.tsx";
import Home from "./Components/Home/Home.tsx";
import Post from "./Components/Post/Post.tsx";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./Store/authSlice.ts";
import { Provider } from "react-redux";
import authService from "./appwrite/auth.ts";
import store from "./Store/store.ts";
import React from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ user }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
