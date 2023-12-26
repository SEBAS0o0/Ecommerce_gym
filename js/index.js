document.addEventListener("DOMContentLoaded", function() {
    // Simula una carga asíncrona
    setTimeout(function() {
        // Oculta el preloader
        document.querySelector('.preloader').style.display = 'none';
        // Muestra el contenido principal
        document.getElementById('main-content').style.display = 'block';
    }, 3000); // Puedes ajustar el tiempo de simulación de carga
});
