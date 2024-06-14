// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-bfa39.firebaseapp.com",
  projectId: "mern-estate-bfa39",
  storageBucket: "mern-estate-bfa39.appspot.com",
  messagingSenderId: "311257515691",
  appId: "1:311257515691:web:12187714a6c1cbc151d9ee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
