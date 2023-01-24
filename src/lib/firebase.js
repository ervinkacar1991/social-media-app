import Firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// here i want ti import the seed file
// import { seedDatabase } from "../seed";

const config = {
  apiKey: "AIzaSyCMpf8W-jSjvR-2_kBZZHRe7zskVsEMSfQ",
  authDomain: "nit-social.firebaseapp.com",
  projectId: "nit-social",
  storageBucket: "nit-social.appspot.com",
  messagingSenderId: "625413102271",
  appId: "1:625413102271:web:88a7760ca6899a13ec440a",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where i want to call the seed file (only ONCE)
// seedDatabase(firebase);

export { firebase, FieldValue };
