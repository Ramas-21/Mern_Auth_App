// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-app-c0b48.firebaseapp.com",
  projectId: "auth-app-c0b48",
  storageBucket: "auth-app-c0b48.appspot.com",
  messagingSenderId: "64086394372",
  appId: "1:64086394372:web:83e088fd82eda54f9cd751"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);