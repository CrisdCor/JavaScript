/**
 * PROMESAS
 * las promesas en JS representan el estado de una petición y estos puede ser:
 * - Pendiente (pending)
 * - Rechazada (rejected)
 * - Terminada (fulfilled)
 * Las promesas se utilizan para:
 * - Hacer consultas a las bases de datos
 * - Peticiones a servidores
 * - También se pueden utilizar para trabajar con web workers, esto se hace cuando se tiene que realizar un cálculo muy pesado para el navegador
 */

// La función constructora de promise recibe una función, la cual recibe a su vez dos argumentos:
// 1. Es una función que se llama "resolve"
// 2. Es una función que se llama "reject"
// Toda la lógica de lo que vamos a hacer la realizamos dentro de los paréntesis de llave

// let promesa = new Promise((resolve, reject) => {
//   setTimeout(() => resolve(42), 10000);
// }); // Ejemplo 1

// let promesa = new Promise((resolve, reject) => {
//   setTimeout(() => reject("error de carga"), 1000);
// }); // Ejemplo 2

// Como se pueden capturar las promesas y hacer que la aplicación funcione de forma más elegante
let promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hola mundo"), 1000);
});

/**
 * Método then:
 * Este método recibe dos funciones
 * 1. onfulFilled: Es lo que se va a ejecutar en el caso de que la promesa se resuelva de forma exitosa
 * 2. onrejected: Es lo que se ejecuta en caso de que la promesa sea rechazada.
 */
promesa.then(
  (valor) => console.log(valor),
  (e) => console.log("error", e)
);
