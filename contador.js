// Obtener la fecha objetivo
const targetDate = new Date("November 23, 2024 17:00:00").getTime();

// Actualizar la cuenta regresiva cada 1 segundo
const countdownInterval = setInterval(function() {

    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la diferencia entre la fecha actual y la fecha objetivo
    const timeLeft = targetDate - now;

    // Calcular el tiempo en días, horas, minutos y segundos
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Actualizar los elementos en el DOM
    document.querySelectorAll(".countdown .number")[0].textContent = days;
    document.querySelectorAll(".countdown .number")[1].textContent = hours;
    document.querySelectorAll(".countdown .number")[2].textContent = minutes;
    document.querySelectorAll(".countdown .number")[3].textContent = seconds;

    // Si la cuenta regresiva ha terminado, detén la actualización
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".countdown").textContent = "¡Celebración!";
    }

}, 1000);
