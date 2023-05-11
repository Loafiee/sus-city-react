import React from "react";
import { BsBoxArrowRight, BsShop } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MenuBar() {
  return (
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
  );
}
