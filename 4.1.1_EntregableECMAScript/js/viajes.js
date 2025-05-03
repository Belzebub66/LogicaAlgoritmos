import { calcularCosto } from './logica.js';
let numViaje = 1;
// Array para guardar los continentes
const continentes = [];

// Función para registrar un destino de viaje
const registrarDestino = () => {
    // TODO: Crear un objeto con los datos del destino
    const continente = document.getElementById("continente").value;
    const destino = document.getElementById("destino").value;
    const fecha = document.getElementById("fechaSalida").value;
    const transporte = document.getElementById("transporte").value;
    
    const nuevoViaje = {
        continente: continente,
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(continente, transporte)
    };

    continentes.push(nuevoViaje);
}

// Función para mostrar el itinerario de los viajes registrados
const mostrarItinerario = () => {
    
    // TODO: Recorrer el arreglo de continentes y mostrar la información de cada uno
    for (let i = 0; i < continentes.length; i++) {
        const viaje = continentes[i];
        console.log("----------------------------");
        console.log("Continente: " + viaje.continente);
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");

        let resultado = document.createElement("div");
        resultado.innerHTML = `
            <li><strong>Viaje ${numViaje}</strong></li>
            <p><strong>Continente:</strong> ${viaje.continente}</p>
            <p><strong>Destino:</strong> ${viaje.destino}</p>
            <p><strong>Fecha:</strong> ${viaje.fecha}</p>
            <p><strong>Transporte:</strong> ${viaje.transporte}</p>
            <p><strong>Costo:</strong> $${viaje.costo}</p>
            `;
        document.getElementById("listaViajes").appendChild(resultado);
        numViaje++;
        continentes.splice(i, 1); // Eliminar el viaje del array después de mostrarlo
    }
}


// Exportar las funciones para que puedan ser utilizadas en otros módulos
export { registrarDestino, mostrarItinerario };