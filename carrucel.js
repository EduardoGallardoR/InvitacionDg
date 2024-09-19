let currentSlide = 0;
const slides = document.querySelectorAll(".carousel-inner img");
const totalSlides = slides.length;

function updateCarousel() {
  const offset = -currentSlide * 100;
  document.querySelector(".carousel-inner").style.transform = `translateX(${offset}%)`;
}

function changeSlide(n) {
  currentSlide = (currentSlide + n + totalSlides) % totalSlides;
  updateCarousel();
}

// Cambiar automáticamente las diapositivas cada 3 segundos
setInterval(() => changeSlide(1), 3000);

// Inicializa el carrusel
updateCarousel();
