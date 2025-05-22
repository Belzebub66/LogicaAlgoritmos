function factorial(x){
    //es return 1 porque es el caso base
    if (x === 1) return 1;
    return x * factorial(x-1);

}

let factorialCalcular=5;
console.log(`el factorial a calcular de ${factorialCalcular} es ${factorial(factorialCalcular)}`);


/*
Encontrar una solucion que nos permita encontrar la salida de un laberinto

Regla del laberinto
1.- Los valores 1 son paredes
2.- Los valores 0 son caminos
3.- El valor 2 es la entrada del laberinto
4.- El valor 3 es la salida del laberinto
5.- Solamente podemos avanzar arriba, abajo, izquierda o derecha
6.- Avanzamos de uno en uno
7.- No tienen ciclos

Objetivo: encontrar un camino dentro de este arreglo bidimensional que llegue de 2 a 3




algoritmo de busqueda aplicada a grafos
recorrido en profundidad
recorrido en ancho
*/

const laberinto = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
// busca a reductible en youtube, hay un teorema que dice que lo que hacemos con recursividad lo podemos hacer con forwhile etc.


function avanzar(fila, columna, laberinto){
    console.log(`[${fila} ${columna}]`);

    // Verificar los casos en los que ya no pueda avanzar.
    if(
        fila < 0 || fila >= laberinto.length || // Verificamos que no tratemos de acceder a una fila inexistente.
        columna < 0 || columna >= laberinto[0].length || // Verificamos que no accedemos a una columna inexistente.
        laberinto[fila][columna] === 1 || // Ya nos topamos con pared.
        laberinto[fila][columna] === 4 // Tratamos de movernos a la posición de la que llegamos.
    ){
        console.log('No se puede avanzar por aquí...');
        return false;
    }

    if(laberinto[fila][columna] === 3){
        console.log('¡Encontré la salida!');
        return true;
    }

    /*
        Comenzamos a avanzar a partir de la derecha y en sentido de las manecillas del reloj.
        1. Derecha
        2. Abajo
        3. Izquierda
        4. Arriba
    */

    laberinto[fila][columna] = 4; // Marcando el camino momentáneamente como recorrido.

    // 1. Derecha
    if(avanzar(fila, columna + 1, laberinto)){
        console.log(`Regresando de la derecha`);
        return true;
    };

    // 2. Abajo
    if(avanzar(fila + 1, columna, laberinto)){
        console.log(`Regresando de abajo`);
        return true;
    };

    // 3. Izquierda
    if(avanzar(fila, columna - 1, laberinto)){
        console.log(`Regresando de la izquierda`);
        return true;
    };

    // 4. Arriba
    if(avanzar(fila - 1, columna, laberinto)){
        console.log(`Regresando de la arriba`);
        return true;
    };

    laberinto[fila][columna] = 0; // Desmarcando el camino.
    
    console.log(`Aquí ya no hay más camino por recorrer`);
    return false;

}

avanzar(1, 0, laberinto);
console.log(laberinto);