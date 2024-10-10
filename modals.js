// Limitar caracteres en el campo de nombre
document.getElementById('nombre').addEventListener('input', function() {
    const maxLength = 50;
    if (this.value.length > maxLength) {
      this.value = this.value.slice(0, maxLength); // Limitar la longitud
    }
    // Permitir solo letras y espacios
    this.value = this.value.replace(/[^A-Za-z\s]/g, ''); // Eliminar caracteres no válidos
  });
  
  // Limitar caracteres en el campo de número celular
  document.getElementById('telefono').addEventListener('input', function() {
    const maxLength = 10;
    if (this.value.length > maxLength) {
      this.value = this.value.slice(0, maxLength); // Limitar la longitud
    }
    // Permitir solo dígitos
    this.value = this.value.replace(/\D/g, ''); // Eliminar caracteres no numéricos
  });
  
  // Mostrar el modal de confirmación después de enviar el formulario
  document.getElementById('sheetdb-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario tradicional
  
    const formData = new FormData(this); // Recoger los datos del formulario
  
    // Enviar datos con AJAX
    fetch('https://sheetdb.io/api/v1/fb1wvsc9zbbln', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json(); // Parsear la respuesta JSON
      }
      throw new Error('Error en el registro');
    })
    .then(data => {
      console.log(data); // Para verificar la respuesta
      // Mostrar el modal solo si el registro fue exitoso
      document.getElementById('confirmation-modal').style.display = 'block';
    })
    .catch(error => {
      console.error('Error:', error);
      // Manejar errores si es necesario
    });
  });
  
  // Cerrar el modal
  document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('confirmation-modal').style.display = 'none';
  });
  
  // Cerrar el modal si se hace clic fuera del contenido del modal
  window.addEventListener('click', function(event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
  