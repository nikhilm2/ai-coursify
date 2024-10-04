// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-a6480.firebaseapp.com",
  projectId: "ai-course-a6480",
  storageBucket: "ai-course-a6480.appspot.com",
  messagingSenderId: "755790446669",
  appId: "1:755790446669:web:8d7bc4c16326b771c69c04",
  measurementId: "G-Y7RKZZLYG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)