let isFilled = false; // Variable para rastrear si la barra está llena

window.addEventListener('scroll', function() {
    const timeline = document.querySelector('.timeline'); // Selecciona la línea de tiempo
    const progressBar = document.querySelector('.timeline-fill');

    // Obtener la posición de la línea de tiempo
    const timelineRect = timeline.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Calcular si la línea de tiempo es visible
    const isTimelineVisible = timelineRect.top < windowHeight && timelineRect.bottom > 0;

    if (isTimelineVisible) {
        // Calcular cuánto se ha desplazado desde el inicio de la línea de tiempo
        const distanceScrolled = windowHeight - timelineRect.top; 
        const totalScrollableDistance = windowHeight; // Altura de la ventana

        // Obtener el porcentaje de scroll dentro de este rango
        const scrollPercentage = distanceScrolled / totalScrollableDistance;

        // Limitar el porcentaje entre 0 y 1 para evitar desbordamiento
        const progress = Math.min(Math.max(scrollPercentage, 0), 1.1);

        // Ajustar la altura de la barra de progreso según el porcentaje de scroll
        const maxTimelineHeight = 505; // Altura máxima de la línea de tiempo
        progressBar.style.height = (progress * maxTimelineHeight) + 'px';
        
        // Si se está desplazando hacia abajo y la barra no está llena, llenarla
        if (!isFilled) {
            progressBar.style.height = '505px'; // Mantener la barra llena
            isFilled = true; // Actualizar el estado de la barra
        }
    } else if (window.scrollY < timelineRect.top && isFilled) {
        // Si se desplaza hacia arriba más allá de la línea de tiempo, vaciar la barra
        progressBar.style.height = '0px';
        isFilled = false; // Actualizar el estado de la barra
    }
});


//Animacion de los tinerarios de la fiesta
document.addEventListener("DOMContentLoaded", function() {
    const timelineItems = document.querySelectorAll('.timeline-content');

    function checkVisibility() {
        const windowHeight = window.innerHeight;

        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            // Verifica si el elemento es visible en el viewport
            if (rect.top < windowHeight && rect.bottom > 0) {
                item.classList.add('active'); // Agrega la clase active
            }
        });
    }

    // Ejecutar la verificación al cargar la página
    checkVisibility();

    // Ejecutar la verificación al hacer scroll
    window.addEventListener('scroll', checkVisibility);
});


//Animacion de los card de indicaciones
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 && rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && 
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Función para agregar la clase de animación
  function handleScroll() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      if (isElementInViewport(card)) {
        card.classList.add('show'); // Agrega la clase para iniciar la animación
      }
    });
  }
  
  // Escucha el evento de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Llama a la función al cargar la página para verificar la visibilidad inicial
  handleScroll();
  