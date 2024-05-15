/**
 * Esta es la forma habitual
 */

// function User(name) {
//   this.name = name;
//   this.instancia = function () {};
// }

// User.prototype.login = function () {
//   console.log("Hola mundo!");
// };

/**
 * Ahora veremos el ejemplo utilizando la palabra reservada de "class"
 */

class User {
  constructor(name) {
    this.name = name;
    this.instancia = function () {};
  } // Todo lo que esté dentro del constructor será una propiedad dentro del objeto

  activo = true;

  logout = () => {
    console.log("Chao mundo");
  }; // Si la función se pasa como una arrow function Javascript no la reconocerá como método y la entregará como una propiedad del objeto
  //   Si queremos que haga parte del prototipo tendremos que declararlo como se ve en login

  login() {
    console.log("Hola mundo");
  } // Esto quedará agregado en el prototipo
}

const u = new User("Cristian Corrales");

// Puede suceder que por error se llame una función constructora sin la palabra reservada "new", cuando se hace uso de Class esto se resolverá como un error
// const u = User("Cristian Corrales");

// Otro detalle importante es que la clases no se izan
