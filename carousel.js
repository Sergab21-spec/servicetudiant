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
