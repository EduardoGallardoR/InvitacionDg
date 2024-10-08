document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('audio-player');
    var icon = document.getElementById('music-icon');
  
    // Esperamos la primera interacción del usuario para iniciar la reproducción con sonido
    icon.addEventListener('click', function() {
      if (audio.paused) {
        audio.play();
        icon.classList.add('playing');
      } else {
        audio.pause();
        icon.classList.remove('playing');
      }
    });
  });
  