// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOUKiCwgzDKUYKzQKZym-Fu1CXW4Bt3Ms",
  authDomain: "expense-tracker-bf4b3.firebaseapp.com",
  projectId: "expense-tracker-bf4b3",
  storageBucket: "expense-tracker-bf4b3.appspot.com",
  messagingSenderId: "363128160720",
  appId: "1:363128160720:web:51f041d61f94a2edf239d5",
  measurementId: "G-FZZK7JWJ73",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
const analytics = getAnalytics(app);
export const db = getFirestore(app);
