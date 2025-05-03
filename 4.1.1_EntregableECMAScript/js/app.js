import { registrarDestino, mostrarItinerario } from './viajes.js';

// Iniciar la aplicación
function iniciarApp() {
    // Ejemplo de cómo registrar destinos
    /*
    registrarDestino("juan", "Paris", "2024-06-15", "Avión");
    registrarDestino("carlos", "Londres", "2024-07-01", "Tren");
    */
    function agregarViajeBtn() {
        const btnAgregarViaje = document.getElementById("agregarViajeBtn");
        btnAgregarViaje.addEventListener("click", function() {
            // Llamar a la función para registrar el destino
            registrarDestino();
            // Llamar a la función para mostrar el itinerario
            mostrarItinerario();
        });
    }
    // Configurar el botón para agregar viajes
    agregarViajeBtn();

    // Mostrar el itinerario de los viajes
    mostrarItinerario();
}

// Ejecutar la aplicación
iniciarApp();
