// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "portfolio-e33bd",
  storageBucket: "portfolio-e33bd.firebasestorage.app",
  messagingSenderId: "186205092574",
  appId: "1:186205092574:web:2fbf3ede97e9db6ae8604f",
  measurementId: "G-1ECSSWQ2WX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);