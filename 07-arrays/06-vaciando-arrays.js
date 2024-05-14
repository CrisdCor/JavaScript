/**
 * Forma 1
 * Esto presenta un problema y es que el contenido de arr2 seguirá siendo el contenido del array original
 */
// let arr = [1, 2];
// arr = [];

// let arr2 = arr;
// arr = [];

/**
 * Forma 2
 * Hacer el length del array igual a 0
 */
// let arr = [1, 2];
// arr.length = 0;

/**
 * Forma 3
 * Hacer un splice desde el 0 hasta la longitud del array
 */

// let arr = [1, 2];
// arr.splice(0, arr.length);

/**
 * Forma 3
 * ultima opción y no recomendada, es lenta y más usaría recurso de la memoria
 */

// let arr = [1, 2];
// while (arr.length > 0) {
//   arr.pop();
// }

// console.log(arr);
