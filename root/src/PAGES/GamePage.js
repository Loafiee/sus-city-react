import React, { useContext, useEffect, useMemo, useState } from "react";
import "../STYLES/Game.css";
import { BsFillSendFill } from "react-icons/bs";
import MenuBar from "./MenuBar";
import { ref, get, update, increment } from "firebase/database";
import { getAllQuestions } from "../HELPER-FUNC/ReadQns";
import { FirebaseContext } from "../HELPER-FUNC/FirebaseProvider";
// import useSound from "use-sound";

//import sound
import menuClick from "../ASSETS/SOUNDS/menuclick.mp3";
import onLoad from "../ASSETS/SOUNDS/onload.mp3";

//Import Images
import { LayeredImage } from "react-layered-image";
import city from "../ASSETS/BASE-0.png";
import devCoast1 from "../ASSETS/DEVELOPMENTS/DEV-COAST-1.png";
import devCoast2 from "../ASSETS/DEVELOPMENTS/DEV-COAST-2.png";
import devFactory1 from "../ASSETS/DEVELOPMENTS/DEV-FACTORY-1.png";
import devFactory2 from "../ASSETS/DEVELOPMENTS/DEV-FACTORY-2.png";
import devGasStation1 from "../ASSETS/DEVELOPMENTS/DEV-GAS STATION-1.png";
import devGasStation2 from "../ASSETS/DEVELOPMENTS/DEV-GAS STATION-2.png";
import devLandfill1 from "../ASSETS/DEVELOPMENTS/DEV-LANDFILL-1.png";
import devLandfill2 from "../ASSETS/DEVELOPMENTS/DEV-LANDFILL-2.png";
import devOffices1 from "../ASSETS/DEVELOPMENTS/DEV-OFFICES-1.png";
import devOffices2 from "../ASSETS/DEVELOPMENTS/DEV-OFFICES-2.png";
import devRoad1 from "../ASSETS/DEVELOPMENTS/DEV-ROAD-1.png";
import devRoad2 from "../ASSETS/DEVELOPMENTS/DEV-ROAD-2.png";
import parkStage1 from "../ASSETS/DEVELOPMENTS/PARK-stage 1.png";
import parkStage2 from "../ASSETS/DEVELOPMENTS/PARK-stage 2.png";
import parkStage3 from "../ASSETS/DEVELOPMENTS/PARK-stage 3.png";

export default function GamePage() {
  const [app, auth, database] = useContext(FirebaseContext);

  const userUID = localStorage.getItem("UID");
  // const userRef = ref(firebaseApp.database, "users/" + userUID);
  const [data, setData] = useState(null); //set user data

  //for questions
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        console.log("PROGRESS: Start Loading");
        const loadedQuestions = await getAllQuestions(database);
        console.log("PROGRESS: Finished Loading");
        setQuestions(loadedQuestions);
      } catch (error) {
        console.error(error);
      }
    };

    if (database) {
      fetchQuestions();
      get(ref(database, `users/${userUID}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setData(snapshot.val());
          } else {
            console.log("User does not exist"); //Redirect user to sign up page
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("ERROR: Database undefined");
    }
  }, [database]);

  useEffect(() => {
    console.log(questions);
    //START GAME AFTER HERE
  }, [questions]);

  // const currentQuestion = questions[currentQuestionIndex];

  const updateData = (prop) => {
    const updates = {};
    updates[`/${prop}`] = increment(1);
    update(ref(database, "users/" + userUID), updates);
  };

  const [layers, setLayers] = useState([city]);
  // const BoopButton = () => {
  //   const [playMenuClick] = useSound(menuClick);
  // };
  const constantSound = () => {
    const audio = new Audio(onLoad);
    audio.play();
  };
  const menuSound = () => {
    const audio = new Audio(menuClick);
    audio.loop = false;
    audio.play();
  };
  const [currentAudio, setCurrentAudio] = useState(onLoad);

  const handleAudioEnded = () => {
    if (currentAudio === onLoad) {
      setCurrentAudio(menuClick);
    } else {
      setCurrentAudio(onLoad);
    }
  };

  useEffect(() => {
    constantSound();
  }, []);

  useEffect(() => {
    // Load Developments
    if (data) {
      updateData("roadLevel");
      if (data.roadLevel >= 3) {
        setLayers([...layers, devRoad1]); //sets the new value of layers as the old value + newly added
        console.log(city);
      }
    }
  }, [data]);

  return (
    <div className="game-body">
      <MenuBar />
      <div className="main-menu">
        {/* city console aka 'gods phone' */}
        <div className="city">
          <LayeredImage
            layers={layers}
            style={{ aspectRatio: 16 / 9 }}
          ></LayeredImage>
        </div>

        <div className="mainCont">
          {/* <audio controls onEnded={handleAudioEnded}>
            Background Music
            <source src={currentAudio} type="audio/mp3" />
          </audio> */}
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
              <button
                className="fa-regular fa-paper-plane"
                id="sendBtn"
                // onClick={() => {
                //   audio.loop = true;
                //   audio.play();
                // }}
                onClick={() => {
                  menuSound();
                }}
              >
                <BsFillSendFill></BsFillSendFill>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Sound />, rootElement);
