document.getElementById('nombre').addEventListener('input', function() {
    const maxLength = 40;
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