const carousel = document.getElementById('testimonialCarousel');
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;
let autoSlideInterval;

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    // calculer la position
    const position = i - index;

    // donner les transformations
    if (position === 0) {
      // centre
      testimonial.style.transform = 'translateX(0px) translateZ(0px) rotateY(0deg) scale(1)';
      testimonial.style.opacity = '1';
      testimonial.style.zIndex = '10';
    } else if (position === 1) {
      // first droite
      testimonial.style.transform = 'translateX(380px) translateZ(-200px) rotateY(15deg) scale(0.85)';
      testimonial.style.opacity = '0.6';
      testimonial.style.zIndex = '4';
    } else if (position === -1) {
      // first gauche
      testimonial.style.transform = 'translateX(-380px) translateZ(-200px) rotateY(-15deg) scale(0.85)';
      testimonial.style.opacity = '0.6';
      testimonial.style.zIndex = '4';
    } else if (position > 1) {
      // hide droite
      testimonial.style.transform = 'translateX(760px) translateZ(-200px) rotateY(30deg) scale(0.7)';
      testimonial.style.opacity = '0.3';
      testimonial.style.zIndex = '2';
    } else {
      // hide gauche
      testimonial.style.transform = 'translateX(-760px) translateZ(-200px) rotateY(-30deg) scale(0.7)';
      testimonial.style.opacity = '0.3';
      testimonial.style.zIndex = '2';
    }
  });

  // update les dots
  updateDots(index);
}

function updateDots(activeIndex) {
  const dotsContainer = document.querySelector('.flex.justify-center.gap-2.mt-6');
  if (!dotsContainer) return;

  const dots = dotsContainer.querySelectorAll('button');
  dots.forEach((dot, i) => {
    if (i === activeIndex) {
      dot.className = 'w-2 h-2 rounded-full transition-all bg-blue-600 w-8';
    } else {
      dot.className = 'w-2 h-2 rounded-full transition-all bg-gray-300 hover:bg-gray-400';
    }
  });
}

function goToSlide(index) {
  current = index;
  showTestimonial(current);
  resetAutoSlide();
}

function nextSlide() {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
  resetAutoSlide();
}

function prevSlide() {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
  resetAutoSlide();
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    current = (current + 1) % testimonials.length;
    showTestimonial(current);
  }, 5000);
}

// boutons pour changer
document.addEventListener('DOMContentLoaded', () => {
  const buttonsContainer = document.querySelector('.flex.justify-center.gap-4.mt-8');
  if (buttonsContainer) {
    const buttons = buttonsContainer.querySelectorAll('button');
    if (buttons.length >= 2) {
      buttons[0].addEventListener('click', prevSlide); // gauche
      buttons[1].addEventListener('click', nextSlide);  // droite
    }
  }

  // commencer les dots
  const dotsContainer = document.querySelector('.flex.justify-center.gap-2.mt-6');
  if (dotsContainer) {
    const dots = dotsContainer.querySelectorAll('button');
    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => goToSlide(i));
    });
  }

  // le premier qui start
  showTestimonial(current);

  // auto scroll
  resetAutoSlide();
});
