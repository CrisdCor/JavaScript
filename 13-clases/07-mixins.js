const Entidad = {
  save() {
    console.log("save desde Entidad...");
  },
};

const Actualizar = {
  update() {
    console.log("actualizando desde Entidad...");
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
  //   Se debe también hacer un override
  save() {
    console.log("guaradado desde usuario...");
  }
  update() {
    console.log("actualizando desde usuario...");
  }
}

// La siguiente línea es para tomar de Entidad el método de save y heredarlo al objeto de User
// Object.setPrototypeOf(User.prototype, Entidad);

// Para el caso de que queramos heredar varios métodos, componemos los dos objetos así
const nuevoProto = Object.assign({}, Entidad, Actualizar);
Object.setPrototypeOf(User.prototype, nuevoProto);

const u = new User("Cristian Corrales");
u.save();
