let arr1 = [1, 2];
let arr2 = [3, 4];

// Este método de combinación no modifica los array, por lo que es necesario asignarlo a una nueva variable
let combinados = arr1.concat(arr2);

// console.log(combinados, arr1, arr2);

/**
 * Forma 1 para dividir array
 * argumento 1: índice inicial
 * argumento 2: índice final
 */
let divididos = combinados.slice(1, 3);
console.log(divididos);

let divididos2 = combinados.slice(1);
console.log(divididos2);

let divididos3 = combinados.slice(); // Esto genera una copia y no una referencia
console.log(divididos3);
