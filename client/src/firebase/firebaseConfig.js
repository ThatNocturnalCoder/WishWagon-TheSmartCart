// src/firebase/firebaseConfig.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC3v0PQ-q9T1O49Opgkb6YFjQLhuhW6-ug",
    authDomain: "wishwagon-thesmartcart.firebaseapp.com",
    projectId: "wishwagon-thesmartcart",
    storageBucket: "wishwagon-thesmartcart.firebasestorage.app",
    messagingSenderId: "945551612414",
    appId: "1:945551612414:web:69ee09b0b61093009c48af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
