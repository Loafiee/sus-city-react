const fs = require("fs").promises;
const config = require("./index.js");
const { initializeApp } = require("firebase/app");
const { ref, getDatabase, set } = require("firebase/database");

const firebaseApp = initializeApp(config);

const UploadQuestions = async () => {
  const questionsJson = await fs.readFile("questions.json");
  const questions = JSON.parse(questionsJson);
  console.log(`${questions.length} questions will be uploaded to firebase.`);

  for (let i = 0; i < questions.length; i++) {
    const qnRef = ref(getDatabase(firebaseApp), "questions/" + i);
    set(qnRef, questions[i]);
  }
  console.log("Upload Complete");
};

UploadQuestions();
