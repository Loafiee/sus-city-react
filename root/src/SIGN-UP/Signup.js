import React from "react";
import "./Signup.css";

// export const playSound = ({ link }) => {
//   new Audio(link).play();
// };

export default function Signup({ setIsButtonPressed }) {
  return (
    <div className="signup-body">
      <div className="center">
        <h1>Sign Up</h1>
        <div className="txt_field">
          <input type="text" id="username" required />
          <span></span>
          <label>Type a fun username (changed on every login)</label>
        </div>
        <button
          id="submit_btn"
          onClick={() => {
            setIsButtonPressed();
            // playSound("../SOUNDS/menuclick.mp3");
          }}
        >
          Signup
        </button>
        <script type="module" src="/FIREBASE/signup-firebase.js"></script>
      </div>
    </div>
  );
}
