//Function by brute force
function findSumPair(array, sumTarget){

    let indexSum = [-1, -1];
    for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
            console.log(`i: ${i}, j: ${j}`);
            if(array[i] + array[j] === sumTarget){
                //return [array[i], array[j]];
                indexSum[0] = i;
                indexSum[1] = j;
                console.log(`${array[i]} + ${array[j]} = ${array[i] + array[j]}`);
                return indexSum;
            }
        }
    }

    return indexSum;
}

//By two pointer
function findSumPair2Pointers(array, sumTarget){
    let indexSum = [-1, -1]
    let leftPointer =0;
    let rightPointer = array.length -1;

    while(leftPointer < rightPointer){
        let sum = array[leftPointer] + array[rightPointer];
        if(sum === sumTarget){
            indexSum[0] = leftPointer;
            indexSum[1] = rightPointer;
        }else if (sum < sumTarget){
            leftPointer++;
        }else{
            rightPointer--;
        }
    }
    return indexSum;
}

function printIndexValues(array, indexSumResult){
    console.log(`Target value: ${valTarget}`)
    console.log(`Indexes ${indexSumResult[0]} ${indexSumResult[1]}`)
    console.log(`Values: ${array[indexSumResult[0]]} ${array[indexSumResult[1]]}`)
}
let array = [1, 2, 3, 4, 5];
let valTarget = 6;
let indexSumResult;
indexSumResult = findSumPair(array, valTarget);

console.log("Brute force")
valTarget = 9;
indexSumResult = findSumPair(array, valTarget);
printIndexValues(array, indexSumResult, valTarget);

console.log("Two pointers")
valTarget = 9;
indexSumResult = findSumPair2Pointers(array, valTarget);
printIndexValues(array, indexSumResult, valTarget);

//En las entrevistas preguntan sobre la complejidad computacional
// las dos principales variables es tiempo (n de operaciones) y espacio  (o cantidad de datos)

//Oelevado a la n  O que tantas operaciones realizamos

//preguntan cosas como cual es la complejidad de tu algorito es.... mi complejidad es On-1
