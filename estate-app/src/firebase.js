// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "smart-real-estate-f7b13.firebaseapp.com",
  projectId: "smart-real-estate-f7b13",
  storageBucket: "smart-real-estate-f7b13.appspot.com",
  messagingSenderId: "1036709455538",
  appId: "1:1036709455538:web:6fbe64a1c670cdd177cbab",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
