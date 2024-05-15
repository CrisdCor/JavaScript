/**
 * Dentro de un objeto: this hace referencia a un objeto, es decir, donde se está trabajando
 * Dentro de una función: Hace referencia al objeto de window
 * Dentro de node: Hace referencia al objeto global
 * Con la palabra new: Hace referencia al objeto que ser va a crear
 */

// Cuando this hace referencia al objeto
// const user = {
//   name: "Cristian",
//   login() {
//     console.log(this);
//   },
// };

// user.logout = function logout() {
//   console.log(this);
// }; // Otra forma de agregar un método a un objeto

// user.logout();

// Cuando this se encuentra dentro de una función
// function log() {
//   console.log(this);
// }

// log();

// Cuando this está acompañado de la palabra reservada de new
function Log(mensaje) {
  this.mensaje = mensaje;
  console.log(this);
}

/**
 * Cuando se usa la palabra reservada de new sucede 4 cosas
 * 1. Se crea un objeto literal
 * 2. Se vincula el objeto a this
 * 3. Se vincula el prototipo
 * 4. Si no retorna nada, entonces retorna this
 */

const l = new Log("Hola mundo");
