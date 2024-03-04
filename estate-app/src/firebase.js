// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  // apiKey: "AIzaSyBDQfMp5meiPb5ELMWR2pNs6t9WvpdYkKM",
  authDomain: "smart-real-estate-app-d5210.firebaseapp.com",
  projectId: "smart-real-estate-app-d5210",
  storageBucket: "smart-real-estate-app-d5210.appspot.com",
  messagingSenderId: "292027088624",
  appId: "1:292027088624:web:09a0bc78514739640f0c35",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
