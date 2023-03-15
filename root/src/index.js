import React from "react";
import "../src/STYLES/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./PAGES/GamePage";
import SignupPage from "./PAGES/SignupPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignupPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "game",
    element: <GamePage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
