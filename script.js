
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
<script>
const carousel = document.getElementById('testimonialCarousel');
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index) {
  const offset = -index * 100; // décalage en %
  carousel.style.transform = `translateX(${offset}%)`;
}

// Auto-défilement toutes les 5 secondes
setInterval(() => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
}, 5000);
</script>
