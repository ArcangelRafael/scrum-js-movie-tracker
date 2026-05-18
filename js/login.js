import { auth } from "./firebase-config.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

document.getElementById("btnRegister").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await createUserWithEmailAndPassword(auth, email, password);
    alert("Registrado correctamente");
  } catch (e) {
    alert("Error: " + e.message);
  }
};

document.getElementById("btnLogin").onclick = async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "calificar.html";
  } catch (e) {
    alert("Error: " + e.message);
  }
};

document.getElementById("btnGoogle").onclick = async () => {
  try {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    window.location.href = "calificar.html";
  } catch (e) {
    alert("Google login error: " + e.message);
  }
};
