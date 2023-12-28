// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDP-VBmIGpVzqu-KQj-OY8eTnU7lrxg-K4",
  authDomain: "netflix-gpt-e20e7.firebaseapp.com",
  projectId: "netflix-gpt-e20e7",
  storageBucket: "netflix-gpt-e20e7.appspot.com",
  messagingSenderId: "457322189928",
  appId: "1:457322189928:web:829722915a0b99bc4b97dd",
  measurementId: "G-R6Y2H3Z16G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();