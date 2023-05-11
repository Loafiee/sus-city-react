import "../STYLES/Signup.css";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FirebaseContext } from "../HELPER-FUNC/FirebaseProvider";

//FIREBASE IMPORTS
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { set, ref, update } from "firebase/database";

export default function SignupPage() {
  const [app, auth, database] = useContext(FirebaseContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const changeEmail = (event) => {
    setEmail(event.target.value);
  };
  const changePassword = (event) => {
    setPassword(event.target.value);
  };

  function validateEmail(email) {
    const re = /\S+\S+\.\S+/;
    return re.test(email);
  }

  function validatePassword(password) {
    const hasNumeric = /\d/.test(password);
    const hasAlphabetical = /[a-zA-Z]/.test(password);
    const hasSpecial = /[^a-zA-Z0-9]/.test(password);
    if (!hasNumeric) {
      return "Please include at least one numeric character in your password.";
    }
    if (!hasAlphabetical) {
      return "Please include at least one alphabetical character in your password.";
    }
    if (!hasSpecial) {
      return "Please include at least one special character in your password.";
    }
    if (!(password.length >= 6)) {
      return "Please have at least 6 characters in your password";
    }
    return "";
  }

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
            if (!validateEmail(email)) {
              alert("Please enter a valid email.");
              return;
            }
            const passwordValidationMessage = validatePassword(password);
            if (passwordValidationMessage) {
              alert(passwordValidationMessage);
              return;
            }

            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                localStorage.setItem("UID", user.uid);
                var lgDate = new Date();
                update(ref(database, "users/" + user.uid), {
                  last_login: lgDate,
                });
                navigate("/game");
              })
              .catch((error) => {
                const errorCode = error.code;
                if (errorCode === "auth/user-not-found") {
                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      set(ref(database, "users/" + user.uid), {
                        email: email,
                        password: password,
                        level: 1,
                        greenpoints: 0,
                        favor: 0,
                        levelProgress: 0,
                        roadLevel: 2,
                        factoryLevel: 2,
                        parkLevel: 2,
                        officesLevel: 2,
                        landfillLevel: 2,
                        coastLevel: 2,
                        gasstationLevel: 2,
                        shopItems: [""],
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
                }
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
