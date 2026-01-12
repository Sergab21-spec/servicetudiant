console.log("SCRIPT LOADED");

// ===============================
// IMPORT FIREBASE (CDN)
// ===============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

// ===============================
// CONFIG FIREBASE
// ===============================
const firebaseConfig = {
  apiKey: "AIzaSyCwbRpOjGm6fuIzyyH5g5cgDZJW32KZvZk",
  authDomain: "formulaire-site-web-e97a7.firebaseapp.com",
  projectId: "formulaire-site-web-e97a7",
  storageBucket: "formulaire-site-web-e97a7.firebasestorage.app",
  messagingSenderId: "119142251284",
  appId: "1:119142251284:web:9a65a0f4d2238b76c46001",
  measurementId: "G-MCBXNH96WE"
};

// ===============================
// INITIALISATION FIREBASE
// ===============================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

console.log("🔥 Firebase connecté");

// ===============================
// MENU DROPDOWN
// ===============================
const button = document.getElementById("openDropdown");
const dropdown = document.getElementById("navWrap");

console.log("Menu elements:", button, dropdown);

if (button && dropdown) {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("open");
    console.log("Dropdown class:", dropdown.className);
  });
}

// ===============================
// FORMULAIRE CONTACT
// ===============================
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    status.textContent = "Envoi en cours...";
    status.className = "text-sm text-gray-500 text-center mt-4";

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    try {
      await addDoc(collection(db, "messages"), {
        name,
        email,
        phone,
        message,
        createdAt: serverTimestamp()
      });

      status.textContent = "✅ Message envoyé avec succès !";
      status.className = "text-sm text-green-600 text-center mt-4";
      form.reset();

    } catch (error) {
      console.error(error);
      status.textContent = "❌ Erreur lors de l’envoi";
      status.className = "text-sm text-red-600 text-center mt-4";
    }
  });
}



