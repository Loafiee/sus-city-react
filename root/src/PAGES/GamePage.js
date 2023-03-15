import React from "react";
import "../STYLES/Game.css";
import { BsBoxArrowRight, BsShop, BsFillSendFill } from "react-icons/bs";
import { Link } from "react-router-dom";

//Import Images
import city from "../ASSETS/BASE-0.png";

export default function GamePage() {
  return (
    <div className="game-body">
      {/* top menu bar */}
      <div className="top-menu-bar">
        {/* back to login page */}
        <Link to={"/signup"}>
          <button className=" fa-solid fa-right-from-bracket btn" id="return">
            <BsBoxArrowRight></BsBoxArrowRight>
          </button>
        </Link>

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

        <div className="GPoint"></div>
        <div className="favour"></div>
        <div className="username">
          Hello <span></span>
        </div>
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
