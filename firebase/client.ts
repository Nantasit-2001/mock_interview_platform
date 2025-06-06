// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDzV7UjCcW7shfX4-yoMIsFO7mlRp3e8Rc",
  authDomain: "prepwise-149ac.firebaseapp.com",
  projectId: "prepwise-149ac",
  storageBucket: "prepwise-149ac.firebasestorage.app",
  messagingSenderId: "81074052477",
  appId: "1:81074052477:web:4132752e59019a67944014",
  measurementId: "G-N5JHFPF80J"
};

// Initialize Firebase
const app = !getApps.length?initializeApp(firebaseConfig):getApp();
export const auth = getAuth(app);
export const db = getFirestore(app)