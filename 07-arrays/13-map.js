let usuarios = [
  { edad: 17, nombre: "Cristian" },
  { edad: 25, nombre: "Chanchito" },
  { edad: 13, nombre: "David" },
  { edad: 32, nombre: "Nicolas" },
];

/**
 * ****************************************************
 * Esta función recibe los siguientes argumentos:
 * argumento 1: el elemento que está iterando (es decir un usuario)
 * argumento 2: el índice
 * argumento 3: el array mismo que está iterando
 * ****************************************************
 * Esta función creará un arreglo totalmente nuevo
 * Para este ejercicio, solo se utilizará el usuario
 */
// const lista2 = usuarios.map((u) => u.nombre);

/**
 * Un ejemplo construyendo un elemento HTML con el método
 */
// const lista = usuarios.map((u) => `<li>${u.nombre}</li>`);
// const html = `<ol>${lista.join("")}</ol>`; // En este punto el elemento ya está listo para ser insertado en el HTML

// console.log(lista);

/**
 * Otro ejemplo: agregando una propiedad al arreglo existente, en este caso indicando con un boolean quien es mayor y quien no
 * Sintaxis 1
 */

// const mapped = usuarios.map((u) => {
//   return {
//     ...u,
//     mayor: u.edad > 17,
//   };
// });

// console.log(mapped);

/**
 * Otro ejemplo: agregando una propiedad al arreglo existente, en este caso indicando con un boolean quien es mayor y quien no
 * Sintaxis 2
 */

// const mapped = usuarios.map((u) => ({
//   ...u,
//   mayor: u.edad > 17,
// }));

// console.log(mapped);

/**
 * Generar la plantilla con condiciones usando el método de filter
 */
const lista = usuarios
  .filter((u) => u.edad > 17)
  .map((u) => `<li>${u.nombre}</li>`);

const html = `<ol>${lista.join("")}</ol>`; // En este punto el elemento ya está listo para ser insertado en el HTML

console.log(lista);
