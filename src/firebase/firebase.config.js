// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpMhXUpKFICpfdUQkvVWIXlGxuHy6BZyc",
  authDomain: "emajhon-with-firebase-auth.firebaseapp.com",
  projectId: "emajhon-with-firebase-auth",
  storageBucket: "emajhon-with-firebase-auth.appspot.com",
  messagingSenderId: "118062037386",
  appId: "1:118062037386:web:2e8548a226daae8180f073"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;