// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDQuz5g-DJVppxiPaYyAC5RDeQpWT0KQg",
  authDomain: "ieltsjobtask.firebaseapp.com",
  projectId: "ieltsjobtask",
  storageBucket: "ieltsjobtask.appspot.com",
  messagingSenderId: "196151854906",
  appId: "1:196151854906:web:b56baf470e74bdb61c3203",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
