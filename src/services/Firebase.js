import { getDatabase } from "firebase/database"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvERN_Vif53pY2u29eu5c-1NC4V2eqOBk",
  authDomain: "registration-b540d.firebaseapp.com",
  databaseURL: "https://registration-b540d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "registration-b540d",
  storageBucket: "registration-b540d.appspot.com",
  messagingSenderId: "608006951090",
  appId: "1:608006951090:web:ebc882b6c6fb9951c879ab",
  measurementId: "G-5QEMLPTK3B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


















export const database = getDatabase(app);