import ReactDOM from "react-dom/client";
import "./index.css";
import CreatePost from "./Components/Post/CreatePost.tsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "./Layout.tsx";
import Error from "./Error.tsx";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/post" element={<CreatePost />}/>
      <Route path="*" element={<Error />} />
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);
