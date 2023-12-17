import React from "react";
import { DailyDigestPage } from "./pages/DailyDigestPage";
import { DesignToolsPage } from "./pages/DesignToolsPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { HomePage } from "./pages/HomePage";
import { SingleArticle } from "./pages/SingleArticle";
import { createBrowserRouter } from "react-router-dom";
import { AddBlog } from "./pages/AddBlog";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/DailyDigest",
        element: <DailyDigestPage />,
      },
      {
        path: "/DesignTools",
        element: <DesignToolsPage />,
      },
      {
        path: "/Tutorials",
        element: <TutorialsPage />,
      },
      {
        path: `/Tutorials/:id`,
        element: <SingleArticle />,
      },
      {
        path: `/DailyDigest/:id`,
        element: <SingleArticle />,
      },
      {
        path: `/DesignTools/:id`,
        element: <SingleArticle />,
      },
      {
        path: "/:id",
        element: <SingleArticle />,
      },
      {
        path: "/AddBlog",
        element: <AddBlog />,
      },
    ],
  },
]);
