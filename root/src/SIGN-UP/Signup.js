import React from "react";
import "./Signup.css";

export default function Signup() {
  return (
    <div class="center">
      <h1>Sign Up</h1>
      <div class="txt_field">
        <input type="text" id="username" required />
        <span></span>
        <label>Type a fun username (changed on every login)</label>
      </div>
      <button id="submit_btn" onclick="playSound()">
        Sign up
      </button>
      <script type="module" src="/FIREBASE/signup-firebase.js"></script>
    </div>
  );
}
