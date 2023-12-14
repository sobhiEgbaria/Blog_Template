import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DailyDigestPage } from "./pages/DailyDigestPage";
import { DesignToolsPage } from "./pages/DesignToolsPage";
import { TutorialsPage } from "./pages/TutorialsPage";
import { HomePage } from "./pages/HomePage";
import { SingleArticle } from "./pages/SingleArticle";
import { NotFound } from "./components/notFoundPage/notFoundPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <HomePage />,
        ErrorBoundary: <NotFound />,
      },
      {
        path: "/DailyDigest",
        element: <DailyDigestPage />,
        ErrorBoundary: <NotFound />,
      },
      {
        path: "/DesignTools",
        element: <DesignToolsPage />,
        ErrorBoundary: <NotFound />,
      },
      {
        path: "/Tutorials",
        element: <TutorialsPage />,
        ErrorBoundary: <NotFound />,
      },
      {
        path: `/Tutorials/:id`,
        element: <SingleArticle />,
        ErrorBoundary: <NotFound />,
      },
      {
        path: `/DailyDigest/:id`,
        element: <SingleArticle />,
        ErrorBoundary: <NotFound />,
      },
      {
        path: `/DesignTools/:id`,
        element: <SingleArticle />,
        ErrorBoundary: <NotFound />,
      },
      // {
      //   path: "/:id",
      //   element: <SingleArticle />,
      // },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
