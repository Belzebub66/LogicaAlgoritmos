// Función para calcular el costo del viaje
function calcularCosto(continente, transporte) {
    let costoBase = 0;

    // Costo base por continente
    /*
    if (continente === "Paris") {
        costoBase = 500;
    } else if (continente === "Londres") {
        costoBase = 400;
    } else if (continente === "New York") {
        costoBase = 600;
    }
    */
    //costo base por continente
    switch (continente){
        case "Europa":
            costoBase = 100;
            break;
        case "America":
            costoBase = 200;
            break;
        case "Asia":
            costoBase = 300;
            break;
        case "Africa":
            costoBase = 400;
            break;
        case "Oceania":
            costoBase = 500;
            break;
        default:
            costoBase = 0; // Sin costo adicional para otros continentes
    }

    // Costo adicional por tipo de transporte
    /*
    if (transporte === "Avión") {
        costoBase += 200;
    } else if (transporte === "Tren") {
        costoBase += 100;
    }
    */
    //costo adicional por tipo de transporte
    switch (transporte){
        case "Avion":
            costoBase += 200;
            break;
        case "Tren":
            costoBase += 100;
            break;
        case "Barco":
            costoBase += 300;
            break;
        case "Auto":
            costoBase += 150;
            break;
        default:
            costoBase += 0; // Sin costo adicional para otros transportes
    }

    return costoBase;


}

// Exportar la función para que pueda ser utilizada en otros módulos
export { calcularCosto };