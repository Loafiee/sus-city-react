import React, { useState } from "react";
import "../STYLES/Signup.css";
import { useNavigate } from "react-router-dom";

//FIREBASE IMPORTS
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, set, ref } from "firebase/database";
import app from "../FIREBASE/Base";

export default function SignupPage() {
  const auth = getAuth(app);
  const database = getDatabase(app);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="signup-body">
      <div className="center">
        <h1>Sign Up</h1>
        <div className="txt_field">
          <input
            type="email"
            id="email"
            onChange={changeEmail}
            value={email}
            required
          />
          <span></span>
          <label>email</label>
        </div>
        <div className="txt_field">
          <input
            type="password"
            id="password"
            onChange={changePassword}
            value={password}
            required
          />
          <span></span>
          <label>password</label>
        </div>
        <button
          id="submit_btn"
          onClick={() => {
            createUserWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                // localStorage.setItem("USER_ID", user.uid);

                set(ref(database, "users/" + user.uid), {
                  email: email,
                  password: password,
                });

                navigate("/game");
              })
              .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                switch (errorCode) {
                  case "auth/invalid-email":
                    alert("Please enter a valid email.");
                    break;
                  case "auth/weak-password":
                    alert(
                      "Please enter a stronger password, with a minimum of 6 characters."
                    );
                    break;
                  default:
                    alert("Please enter a valid email and password.");
                }
                console.log(errorMessage);
              });
          }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

//SOUND STUFF
// const BoopButton = () => {
//   const [playMenuClick] = useSound(menuClick);
// import useSound from 'use-sound';

// //import sound
// import menuClick from '../ASSETS/SOUNDS/menuclick.mp3';
