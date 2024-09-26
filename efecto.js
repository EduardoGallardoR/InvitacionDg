window.addEventListener('scroll', function() {
  const timeline = document.querySelector('.timeline'); // Selecciona la línea de tiempo
  const progressBar = document.querySelector('.timeline-fill');

  // Obtener la posición de la línea de tiempo
  const timelineTop = timeline.getBoundingClientRect().top; // Posición superior de la línea de tiempo respecto a la ventana
  const windowHeight = window.innerHeight; // Altura de la ventana visible

  // Calcular si la línea de tiempo es visible en la ventana
  if (timelineTop < windowHeight && timelineTop > 0) {
      // Calcular cuánto se ha desplazado desde el inicio de la línea de tiempo
      const distanceScrolled = windowHeight - timelineTop; 
      const totalScrollableDistance = windowHeight; // Altura de la ventana

      // Obtener el porcentaje de scroll dentro de este rango
      const scrollPercentage = distanceScrolled / totalScrollableDistance;

      // Limitar el porcentaje entre 0 y 1 para evitar desbordamiento
      const progress = Math.min(Math.max(scrollPercentage, 0), 1);

      // Ajustar la altura de la barra de progreso según el porcentaje de scroll
      const maxTimelineHeight = 300; // Altura máxima de la línea de tiempo
      progressBar.style.height = (progress * maxTimelineHeight) + 'px';
  } else {
      // Si no está dentro del rango, vaciar la barra
      progressBar.style.height = '0px';
  }
});
