/**
 * Para acceder a propiedades a privadas para setearlas no será posible desde una función, pero para eso se puede hacer desde class
 */

// function User(a) {
//   let name = a;
//   this.getName = function () {
//     return name;
//   };
// }

class User {
  #name; // De esta manera se inicializa la propiedad y ya estará lista para ser usada
  constructor(name) {
    this.#name = name;
  }
  #logger() {
    console.log("loggeando...");
  } // De esta forma se pueden crear métodos privados
  getName() {
    this.#logger();
    return this.#name;
  }
}

const u = new User("Cristian Corrales");
