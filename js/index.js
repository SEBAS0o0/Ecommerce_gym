document.addEventListener("DOMContentLoaded", function() {
    // Simula una carga asíncrona
    setTimeout(function() {
        // Oculta el preloader
        document.querySelector('.preloader').style.display = 'none';
        document.getElementById("song").play();
    }, 3000); // Puedes ajustar el tiempo de simulación de carga
});
