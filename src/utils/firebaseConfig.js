// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8sSuBZmxnYbvT3ct0m0xmY1D5B6rJVIc",
  authDomain: "discos-shop.firebaseapp.com",
  projectId: "discos-shop",
  storageBucket: "discos-shop.appspot.com",
  messagingSenderId: "531253747426",
  appId: "1:531253747426:web:792a73574d6b4ffc6848bb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize Firestore
const db = getFirestore(app);

export default db;
