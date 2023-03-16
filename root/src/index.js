import React, { createContext, useState } from "react";
import "../src/STYLES/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GamePage from "./PAGES/GamePage";
import SignupPage from "./PAGES/SignupPage";

const DB = createContext();
export default DB;

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
  const [app, setApp] = useState(null);
  const [auth, setAuth] = useState(null);
  const [database, setDatabase] = useState(null);

  return (
    <DB.Provider value={{ app, setApp, auth, setAuth, database, setDatabase }}>
      <RouterProvider router={router} />
    </DB.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
