import React from "react";
import "./Game.css";
import { BsBoxArrowRight, BsShop, BsFillSendFill } from "react-icons/bs";

//IMAGES
import city from "../BASE-DEVELOPMENTS/BASE-0.png";

export default function Game() {
  return (
    <div className="game-body">
      {/* top menu bar */}
      <div className="top-menu-bar">
        {/* back to login page */}
        <button
          className=" fa-solid fa-right-from-bracket btn"
          id="return"
          //   onClick={playSound()}
        >
          <BsBoxArrowRight></BsBoxArrowRight>
        </button>
        {/* env sus bar */}
        <div className="env-sus-bar">
          <div className="circle"></div>
          <div className="rectangle">
            <div className="level-progress"></div>
          </div>
        </div>
        <button
          className="fa-solid fa-shop shop btn"
          //   onClick={playSound()}
        >
          <BsShop></BsShop>
        </button>
        {/* shop */}
        <div className="GPoint"></div>
        {/* setting */}
        <div className="favour"></div>
        <div className="username">
          Hello <span></span>
        </div>
        {/* username account */}
      </div>
      <div className="main-menu">
        <img id="city-image" src={city} alt=""></img>
        {/* city console aka 'gods phone' */}
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
              <div>
                <button
                  className="fa-regular fa-paper-plane"
                  id="sendBtn"
                  //   onClick={playSound()}
                >
                  <BsFillSendFill></BsFillSendFill>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
