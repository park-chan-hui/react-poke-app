// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQnFNQ4t4T3vCzfKoFDjcXsIKuaG1CPPk",
  authDomain: "react-poke-app-ed7de.firebaseapp.com",
  projectId: "react-poke-app-ed7de",
  storageBucket: "react-poke-app-ed7de.firebasestorage.app",
  messagingSenderId: "528525747779",
  appId: "1:528525747779:web:9d004f41675abd6c5756f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;