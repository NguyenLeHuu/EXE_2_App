// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebase_service = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyADJA0aOwkM490dHqDj3JzGqwt_EPl6ZEU",
    authDomain: "exe-tastetrekker.firebaseapp.com",
    projectId: "exe-tastetrekker",
    storageBucket: "exe-tastetrekker.appspot.com",
    messagingSenderId: "315813098350",
    appId: "1:315813098350:web:cb145f1993c02a9603477f",
    measurementId: "G-KBH2Y56T8J",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  console.log("ok");
};
export default firebase_service;
