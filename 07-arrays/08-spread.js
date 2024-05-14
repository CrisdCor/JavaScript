let arr1 = [1, 2];
let arr2 = [5, 6];

let arr3 = [...arr1, 3, 4, ...arr2, 7, 8]; // Esta sintaxis permite traer todos los elementos de una variable
let arr4 = [...arr3]; // Esta sintaxis permite generar copias de los array
arr4.pop();

console.log(arr3);
console.log(arr4);

// Este es un proceso más flexible y fue implementado en ES6
