import sampleSize from "lodash/sampleSize";
import shuffle from "lodash/shuffle";
import { ref, get, child } from "firebase/database";

async function getAllQuestions(database) {
  const dbRef = ref(database);
  try {
    const snapshot = await get(child(dbRef, "questions"));
    if (snapshot.exists()) {
      console.log("PROGRESS: Reading qns");
      // const randomQuestions = sampleSize(snapshot.val(), 10);
      return snapshot.val();
      // return snapshot.val().map((question) => ({
      //   ...question,
      //   choices: shuffle(question.choices),
      // }));
    } else {
      console.log("ERROR: No data available");
    }
  } catch (error) {
    console.error(error);
  }
  return [];
}

export { getAllQuestions };
