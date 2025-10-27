import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutPage from "./pages/AboutPage.tsx";
import RootLayout from "./layouts/RootLayout.tsx";
import DetailsPage from "./pages/DetailsPage.tsx";

const browserRouter = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "details/:id",
        element: <DetailsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>
);
