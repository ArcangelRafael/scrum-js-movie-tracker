// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAaSsFaoPEWPIrjXD2fXJi-Fpyb2A1jqp0",
    authDomain: "usuarios-peliculas.firebaseapp.com",
    projectId: "usuarios-peliculas",
    storageBucket: "usuarios-peliculas.appspot.com", // corregido
    messagingSenderId: "1078630193708",              // corregido
    appId: "1:1078630193708:web:142e60743a2bb4697c1f13"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
