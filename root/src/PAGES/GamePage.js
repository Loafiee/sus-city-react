import React, { useEffect, useState } from "react";
import "../STYLES/Game.css";
import { BsFillSendFill } from "react-icons/bs";
import MenuBar from "../COMPONENTS/MenuBar";

//Import Images
import { LayeredImage } from "react-layered-image";
import city from "../ASSETS/BASE-0.png";

export default function GamePage() {
  const [layers, setLayers] = useState([city]);

  useEffect(() => {
    //LOAD DEVELOPMENTS WHEN FIRST LAUNCH
    //setLayers([...layers, blimp]); -> where blimp is newly added image
  }, []);

  return (
    <div className="game-body">
      <MenuBar />
      <div className="main-menu">
        {/* city console aka 'gods phone' */}
        <div className="city">
          <LayeredImage layers={layers}></LayeredImage>
        </div>

        <div className="mainCont">
          <h2>
            <pre>THE CONSOLE</pre>
          </h2>
          <div className="terminalCont">
            <div className="terminalResultWrapper">
              <div id="terminalResultsCont"></div>
            </div>
            <div id="inputCont">
              <input
                id="terminalTextInput"
                type="text"
                placeholder="Try /help"
                autoComplete="off"
              ></input>
              <button className="fa-regular fa-paper-plane" id="sendBtn">
                <BsFillSendFill></BsFillSendFill>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
