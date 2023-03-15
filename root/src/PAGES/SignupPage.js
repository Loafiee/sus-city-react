import React from "react";
import "../STYLES/Signup.css";
import { Link } from "react-router-dom";

export default function SignupPage({ setIsButtonPressed }) {
  return (
    <div className="signup-body">
      <div className="center">
        <h1>Sign Up</h1>
        <div className="txt_field">
          <input type="text" id="username" required />
          <span></span>
          <label>Type a fun username (changed on every login)</label>
        </div>
        <Link to={"/game"}>
          <button id="submit_btn">Sign up</button>
        </Link>

        <script type="module" src="/FIREBASE/signup-firebase.js"></script>
      </div>
    </div>
  );
}
