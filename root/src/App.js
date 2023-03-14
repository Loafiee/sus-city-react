import "./App.css";
import Signup from "./SIGN-UP/Signup";
import React, { useState } from "react";
import Game from "./GAME/Game";

function App() {
  const [isButtonPressed, setIsButtonPressed] = useState(false);

  const handleClick = () => {
    setIsButtonPressed(true);
  };

  return (
    <div className="body">
      <div className={isButtonPressed ? "hidden page" : "shown page"}>
        <Signup
          setIsButtonPressed={() => {
            handleClick();
          }}
        ></Signup>
      </div>
      <div className={isButtonPressed ? "shown page" : "hidden page"}>
        <Game setIsButtonPressed={Game}></Game>
      </div>
    </div>
  );
}

export default App;
