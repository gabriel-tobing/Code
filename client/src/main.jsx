import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";

import HomePage from "./Pages/Home/HomePage";
import PodcastPage from "./Pages/Sidebar/PodcastPage";
import VideoPage from "./Pages/Sidebar/VideoPage";
import TagPage from "./Pages/Sidebar/TagPage";
import FaqPage from "./Pages/Sidebar/FaqPage";
import AdvertisePage from "./Pages/Sidebar/AdvertisePage";
import AboutPage from "./Pages/Sidebar/AboutPage";
import ContactPage from "./Pages/Sidebar/ContactPage";
import GuidePage from "./Pages/Sidebar/GuidePage";
import SofwareComparisonPage from "./Pages/Sidebar/SofwareComparisonPage";
import CodeConductPage from "./Pages/Sidebar/CodeConductPage";
import PrivacyPolicyPage from "./Pages/Sidebar/PrivacyPolicyPage";
import TermUsePage from "./Pages/Sidebar/TermUsePage";
import PostDetailPage from "./Pages/PostDetail/PostDetailPage";
import ProfilePage from "./Pages/Profile/ProfilePage";
import SearchPage from "./Pages/Search/SearchPage";
import RegisterPage from "./Pages/User/RegisterPage";
import LoginPage from "./Pages/User/LoginPage";

import store from "./app/store";

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
  {
    path: "/pod",
    element: <PodcastPage />,
  },
  {
    path: "/videos",
    element: <VideoPage />,
  },
  {
    path: "/tags",
    element: <TagPage />,
  },
  {
    path: "/faq",
    element: <FaqPage />,
  },
  {
    path: "/code-advertising-options",
    element: <AdvertisePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/guides",
    element: <GuidePage />,
  },
  {
    path: "/software-comparisons",
    element: <SofwareComparisonPage />,
  },
  {
    path: "/code-of-conduct",
    element: <CodeConductPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicyPage />,
  },
  {
    path: "/terms",
    element: <TermUsePage />,
  },
  {
    path: "/search",
    element: <SearchPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
