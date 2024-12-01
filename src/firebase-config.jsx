// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSwuZEAMLTwsgwSeoUp6BIfWMeVtpMCxY",
  authDomain: "dashboard-96e36.firebaseapp.com",
  projectId: "dashboard-96e36",
  storageBucket: "dashboard-96e36.firebasestorage.app",
  messagingSenderId: "855679305946",
  appId: "1:855679305946:web:7d99d026c12cc28d347de3",
  measurementId: "G-KS0BM9VRBL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);