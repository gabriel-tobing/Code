import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import HomePage from "./Pages/Home/HomePage";
import PostDetailPage from "./Pages/PostDetail/PostDetailPage";
import ProfilePage from "./Pages/Profile/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 Not found!</h1>,
  },
  {
    path: "/post-detail",
    element: <PostDetailPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
