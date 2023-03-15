import React, { useState } from "react";
import "../STYLES/Signup.css";
import { Link } from "react-router-dom";

// import { database } from "../firebase";

import { ref, set } from "firebase/database";
// import useSound from 'use-sound';

// //import sound
// import menuClick from '../ASSETS/SOUNDS/menuclick.mp3';

export default function SignupPage({ setIsButtonPressed }) {
  // const BoopButton = () => {
  //   const [playMenuClick] = useSound(menuClick);

  const [userInfo, setUserInfo] = useState({
    username: "",
  });

  // function writeUserData(userId, username, email) {
  //   set(ref(database, "users/" + userId), {
  //     username: username,
  //     email: email,
  //   });
  // }

  return (
    <div className="signup-body">
      <div className="center">
        <h1>Sign Up</h1>
        <div className="txt_field">
          <input type="text" id="email" required />
          {/* <input type="text" id="username" required /> */}
          <span></span>
          <label>email</label>
        </div>
        <div className="txt_field">
          <input type="text" id="password" required />
          {/* <input type="text" id="username" required /> */}
          <span></span>
          <label>password</label>
        </div>
        <Link to={"/game"}>
          <button
            id="submit_btn"
            onClick={() => {
              // writeUserData()
            }}
          >
            Sign up
          </button>
        </Link>

        <script type="module" src="/FIREBASE/signup-firebase.js"></script>
      </div>
    </div>
  );
}
