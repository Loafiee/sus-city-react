import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./PAGES/GamePage";
import SignupPage from "./PAGES/SignupPage";
import { FirebaseProvider } from "./HELPER-FUNC/FirebaseProvider";

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
    path: "/game",
    element: <GamePage />,
  },
]);

const App = () => {
  return (
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
