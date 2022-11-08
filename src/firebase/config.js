// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import  "firebase/storage";
import  "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZo78CNMrRmbJIwD_ReAICAP4SOGIty1w",
  authDomain: "react-userdata-61ec1.firebaseapp.com",
  projectId: "react-userdata-61ec1",
  storageBucket: "react-userdata-61ec1.appspot.com",
  messagingSenderId: "785335290324",
  appId: "1:785335290324:web:3c573f694d23342a462e41",
  measurementId: "G-H9TZ7QQNBW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage()
const projectFirestore = firebase.firestore()

export {projectFirestore,projectStorage}

