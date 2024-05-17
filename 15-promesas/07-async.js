// **********************************************************************************************************************************************************************************************
let title = document.createElement("div");
title.innerText = "ASYNC";
document.body.append(title);
// **********************************************************************************************************************************************************************************************

/**
 * A cotinuación comparto un código que se conoce como un antipatrón que suele conocerse como:
 * pirámide de la muerte, triángulo de la muerte o sencillamente una mala práctica
 */

// let promesa1 = (param1) =>
//   new Promise((res, rej) => {
//     //calcular algo...
//     const b = "Hola Mundo";
//     res(b);
//   });

// let promesa2 = (param2) =>
//   new Promise((res, rej) => {
//     //calculamos algo...
//     res(param2 + ", hola mundo");
//   });

// let promesa3 = (param1, param2) =>
//   new Promise((res, rej) => {
//     res("Chanchito feliz");
//   });

// Promise.resolve("Primer valor").then((a) => {
//   return promesa1(a).then((b) => {
//     return promesa2(b).then((a, b) => promesa3(a, b));
//   });
// });

/**
 * Esta siguiente forma también sería tediosa porque todos los argumentos se contendrían y ser irían acumulando
 * También se vuelve complejo de leer
 */

// let promesa1 = (param1) =>
//   new Promise((res, rej) => {
//     //calcular algo...
//     const b = "Hola Mundo";
//     res({ contexto: b });
//   });

// let promesa2 = ({ contexto: param2 }) =>
//   new Promise((res, rej) => {
//     //calculamos algo...
//     res({ contexto: { b: param2 + ", hola mundo" } });
//   });

// let promesa3 = ({ contexto: { a, b } }) =>
//   new Promise((res, rej) => {
//     res("Chanchito feliz");
//   });

// Promise.resolve("Primer valor")
//   .then((a) => promesa1(a))
//   .then((b) => promesa1(b))
//   .then((contexto) => promesa3(contexto));

/**
 * Una forma de hacerlo a través de funciones en JasaScript sería de la siguiente forma
 */

let promesa1 = (param1) =>
  new Promise((res, rej) => {
    //calcular algo...
    const b = "Hola Mundo";
    res(b);
  });

let promesa2 = (param2) =>
  new Promise((res, rej) => {
    //calculamos algo...
    res(param2 + ", hola mundo");
  });

let promesa3 = (param1, param2) =>
  new Promise((res, rej) => {
    res("Chanchito feliz");
  });

async function main() {
  // para simplificar lo anterior se puede hacer uso del async
  //   Es decir, dentro de esta función se puede asignar los valores en donde se resolverán las promesas
  //   const a = Promise.resolve("Primer valor"); // de esta manera el valor de "a" será el valor de una promesa
  // pero si usamos la palabra reservada de await, el valor que va a ser "a" será el valor en el cual resolvió la promesa
  try {
    const a = await Promise.resolve("Primer valor");
    const b = await promesa1(a);
    const _ = await promesa2(b);
    promesa3(a, b);
  } catch (error) {
    console.log({ error });
  }
  /**
   * En conclusión:
   * la palabra reservada de "await" dentro de funciones que tengan el nombre de "async" antes de la palabra reservada de function
   * Nos van a permitir a nosotros poder obtener el valor en el cual resuelven las promesas
   * directamente no podemos llamar el método de catch pero si las podemos envolver en un "try - catch"
   */
}

main();
