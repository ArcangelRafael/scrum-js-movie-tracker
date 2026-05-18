import { auth, db } from "./firebase-config.js";
import {
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import {
  doc, setDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html"; // Redirigir si no hay sesión
  }
});

document.getElementById("btnCalificar").onclick = async () => {
  const pelicula = document.getElementById("pelicula").value.trim().toLowerCase();
  const puntuacion = parseInt(document.getElementById("puntuacion").value);
  const user = auth.currentUser;

  if (!pelicula || !puntuacion || puntuacion < 1 || puntuacion > 5) {
    alert("Datos inválidos");
    return;
  }

  try {
    await setDoc(doc(db, "peliculas", pelicula, "calificaciones", user.uid), {
      puntuacion
    });
    alert("Calificación enviada");
  } catch (e) {
    alert("Error: " + e.message);
  }
};
