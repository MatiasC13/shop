// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// const REACT_APP_FIREBASE_APIKEY = "AIzaSyB8sSuBZmxnYbvT3ct0m0xmY1D5B6rJVIc";
// const REACT_APP_FIREBASE_AUTHDOMAIN = "discos-shop.firebaseapp.com";
// const REACT_APP_FIREBASE_PROJECTID = "discos-shop";
// const REACT_APP_FIREBASE_STORAGEBUCKET = "discos-shop.appspot.com";
// const REACT_APP_FIREBASE_MESSAGINGSENDERID = 531253747426;
// const REACT_APP_FIREBASE_APPID = "1:531253747426:web:792a73574d6b4ffc6848bb";

const firebaseConfig = {
  // apiKey: REACT_APP_FIREBASE_APIKEY,
  // authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  // projectId: REACT_APP_FIREBASE_PROJECTID,
  // storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  // messagingSenderId: REACT_APP_FIREBASE_MESSAGINGSENDERID,
  // appId: REACT_APP_FIREBASE_APPID,

  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_FIREBASE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firestore
const db = getFirestore(app);

export default db;
