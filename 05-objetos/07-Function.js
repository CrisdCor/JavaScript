function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function () {
    console.log("Dibujando...");
  };
}

// Se pueden crear funciones utilizando el contructor de Function, recuerda algo importante:
// Este jamás se debe utilizar

// const Point = new Function(
//   "x",
//   "y",
//   `this.x = x;
//     this.y = y;
//     this.dibujar = function () {
//     console.log("Dibujando...");
//     };`
// );

// const p = new Point(1, 2);
// console.log(p);

// Método Call de las funciones
/**
 * Primero argumento: Contexto de this (this pasa a ser el objeto que ponemos en el primer argumento)
 * Siguientes arugmentos: Son los argumentos que contenga la función
 */

let punto1 = { z: 7 };
Punto.call(punto1, 1, 2);

let punto2 = { z: 7 };
Punto.apply(punto2, [1, 2]);

console.log(punto1);
console.log(punto2);
