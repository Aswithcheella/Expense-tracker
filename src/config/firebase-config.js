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
  apiKey: "AIzaSyBIn-Jn3jChdCI9sFR-NEUwsTtca3IDuJc",
  authDomain: "expense-tracker-67650.firebaseapp.com",
  projectId: "expense-tracker-67650",
  storageBucket: "expense-tracker-67650.appspot.com",
  messagingSenderId: "738689572750",
  appId: "1:738689572750:web:df3519aa16589d37e70edf",
  measurementId: "G-MVEVYGNY4J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
