// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8ED6kqzSUz0mqkQcw4fv0zJvdaba8DV0",
  authDomain: "simle-firebase.firebaseapp.com",
  projectId: "simle-firebase",
  storageBucket: "simle-firebase.appspot.com",
  messagingSenderId: "768570234691",
  appId: "1:768570234691:web:a72d3298469aec5a7f81f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// must export app 
export {app}