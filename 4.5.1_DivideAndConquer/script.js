function findMax(arr) {
    // TODO: Agregar la condición del caso base
    if (arr.length === 1) {
        return arr[0]; // Caso base: solo un elemento
    }

    // TODO: Dividir el arreglo en dos mitades
    const n = arr.length;
    if (n === 0) return null; // Caso base: arreglo vacío
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);


    // TODO: Llamar recursivamente a la función para ambas mitades
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // TODO: Combinar las soluciones comparando los máximos
    return Math.max(leftMax, rightMax); // Retorna el máximo entre las dos mitades
}
// Ejemplo de entrada
const numbers = [3, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10

//