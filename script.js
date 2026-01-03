
// Récupère le bouton et le menu
const button = document.getElementById("openDropdown");
const dropdown = document.getElementById("dropdown");

// Vérifie qu'ils existent pour éviter les erreurs
if (button && dropdown) {
    button.addEventListener("click", function () {
        // Toggle la classe pour afficher / cacher le menu
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("dropdown-open");
    });
}
