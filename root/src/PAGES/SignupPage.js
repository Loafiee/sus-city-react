import React, { useState, useEffect } from "react";
import "../STYLES/Signup.css";
import { useNavigate } from "react-router-dom";
import * as firebase from "firebase/app";
import axios from "axios";
import "firebase/auth";

//FIREBASE IMPORTS
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, set, ref, update } from "firebase/database";
// import app from "../FIREBASE/Base";

export default function SignupPage() {
  const [app, setApp] = useState(null);
  const [auth, setAuth] = useState(null);
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/config",
    })
      .then(function (response) {
        // console.log(response.data);
        const firebaseApp = firebase.initializeApp(response.data);
        setApp(firebaseApp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    if (app) {
      setAuth(getAuth(app));
      setDatabase(getDatabase(app));
    }
  }, [app]);
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
            signInWithEmailAndPassword(auth, email, password)
              .then((userCredential) => {
                const user = userCredential.user;

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
