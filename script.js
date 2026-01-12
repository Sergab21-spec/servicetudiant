// ===============================
// SCRIPT GLOBAL CHARGÉ
// ===============================
console.log("SCRIPT LOADED");

// ===============================
// MENU / DROPDOWN
// ===============================
const button = document.getElementById("openDropdown");
const dropdown = document.getElementById("navWrap");

if (button && dropdown) {
  button.addEventListener("click", () => {
    dropdown.classList.toggle("open");
  });
}

// ===============================
// FIREBASE IMPORTS (MODULE)
// ===============================
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// ===============================
// CONFIG FIREBASE (À REMPLACER)
// ===============================
const firebaseConfig = {
  apiKey: "TA_API_KEY",
  authDomain: "TON_PROJET.firebaseapp.com",
  projectId: "TON_PROJECT_ID",
  storageBucket: "TON_PROJET.appspot.com",
  messagingSenderId: "XXXXXXX",
  appId: "APP_ID"
};

// ===============================
// INITIALISATION FIREBASE
// ===============================
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
      status.textContent = "❌ Erreur lors de l’envoi. Réessayez.";
      status.className = "text-sm text-red-600 text-center mt-4";
    }
  });
}

