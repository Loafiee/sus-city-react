const PORT = 8000;
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

const config = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

app.get("/config", (req, res) => {
  res.json(config);
});

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));
module.exports = config;
