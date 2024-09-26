window.addEventListener('scroll', function() {
    // Obtiene la posición del scroll actual
    var scrollPosition = window.scrollY;
    // Altura total del documento menos la ventana visible
    var documentHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calcula el porcentaje de scroll
    var scrollPercentage = (scrollPosition / documentHeight);

    // Multiplica el porcentaje de scroll por la altura total de la barra (300px en este caso)
    var fillHeight = scrollPercentage * 10; // Ajusta este valor si cambias la altura de la barra

    // Actualiza la altura del relleno
    document.querySelector('.timeline-fill').style.height = fillHeight + 'px';
  });