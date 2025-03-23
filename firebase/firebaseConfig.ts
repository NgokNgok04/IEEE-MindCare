// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAJmVRg24cnX3JcI7fZYI9wv2EWwoxf0Yk",
  authDomain: "mindcare-d9f9a.firebaseapp.com",
  projectId: "mindcare-d9f9a",
  storageBucket: "mindcare-d9f9a.firebasestorage.app",
  messagingSenderId: "897950773333",
  appId: "1:897950773333:web:2b42ba382d5b8a7f75a4dc",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
