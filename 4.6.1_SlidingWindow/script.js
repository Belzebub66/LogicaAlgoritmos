function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (const word of words) {
        if (word.length > longestWord.length) {
            // Actualizar la palabra más larga si la actual es más larga
            longestWord = word;
        }
    }
    return longestWord; // Retornar la palabra más larga encontrada
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
console.log(findLongestWord(text)); // Resultado esperado: "programación"