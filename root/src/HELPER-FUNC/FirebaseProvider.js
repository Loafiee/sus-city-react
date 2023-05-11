import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const FirebaseContext = createContext(null);

const FirebaseProvider = ({ children }) => {
  const [app, setApp] = useState(null);
  const [auth, setAuth] = useState(null);
  const [database, setDatabase] = useState(null);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:8000/config",
    })
      .then(function (response) {
        const firebaseApp = initializeApp(response.data);
        setApp(firebaseApp);
        if (app) {
          setAuth(getAuth(app));
          setDatabase(getDatabase(app));
          console.log("PROGRESS: Database loaded");
        } else {
          console.log("ERROR: App not defined");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  // console.log(app);
  // console.log(auth);
  // console.log(database);

  return (
    <FirebaseContext.Provider value={[app, auth, database]}>
      {children}
    </FirebaseContext.Provider>
  );
};

export { FirebaseProvider, FirebaseContext };
