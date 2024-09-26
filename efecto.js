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
        const maxTimelineHeight = 310; // Altura máxima de la línea de tiempo
        progressBar.style.height = (progress * maxTimelineHeight) + 'px';
        
        // Si se está desplazando hacia abajo y la barra no está llena, llenarla
        if (!isFilled) {
            progressBar.style.height = '300px'; // Mantener la barra llena
            isFilled = true; // Actualizar el estado de la barra
        }
    } else if (window.scrollY < timelineRect.top && isFilled) {
        // Si se desplaza hacia arriba más allá de la línea de tiempo, vaciar la barra
        progressBar.style.height = '0px';
        isFilled = false; // Actualizar el estado de la barra
    }
});
