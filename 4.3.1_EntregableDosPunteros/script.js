const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // TODO: Compara las iniciales de los nombres en los punteros
        if (arr[inicio][0] === arr[siguiente][0]) {
        // Si coinciden, devuelve el par
            return [arr[inicio], arr[siguiente]];
        }else if (siguiente === arr.length - 1) {
            // Si el puntero siguiente llega al final, avanza el puntero de inicio
            inicio++;
            siguiente = inicio + 1; // Reinicia el puntero siguiente
        }else {
            // Si no coinciden, avanza el puntero siguiente
            siguiente++;
        }
        
        // ...
        

        // TODO: Avanza los punteros si no coinciden
        // ...
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));