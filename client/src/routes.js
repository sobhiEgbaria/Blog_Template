import React from "react";
import { DailyDigestPage } from "./pages/DailyDigestPage";
import { DesignToolsPage } from "./pages/DesignToolsPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { HomePage } from "./pages/HomePage";
import { SingleBlogPage } from "./pages/SingleBlogPage";
import { createBrowserRouter } from "react-router-dom";
import { AddBlogPage } from "./pages/AddBlogPage";
import { EditBlogPage } from "./pages/EditBlogPage";
import { LandingPage } from "./pages/landingPge/LandingPage";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/HomePage",
        element: <HomePage />,
      },
      {
        path: "/Programming",
        element: <DailyDigestPage />,
      },
      {
        path: "/CS",
        element: <DesignToolsPage />,
      },
      {
        path: "/Tools",
        element: <TutorialsPage />,
      },
      {
        path: `/Tools/:id`,
        element: <SingleBlogPage />,
      },
      {
        path: `/Programming/:id`,
        element: <SingleBlogPage />,
      },
      {
        path: `/CS/:id`,
        element: <SingleBlogPage />,
      },
      {
        path: "/:id",
        element: <SingleBlogPage />,
      },
      {
        path: "/AddBlog",
        element: <AddBlogPage />,
      },
      {
        path: "/EditBlogPage/:id",
        element: <EditBlogPage />,
      },
    ],
  },
]);
