class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }
  save() {
    // Por ahora la lógica de este método no ns interesa
  }
}

// Para poder usar el código de una clase padre sencillamente hacemos uso de la palabra reservada de
// "extends" y el nombre de la clase de donde queremos extender
// y a través de la palara super se trae el constructor del objeto padre
class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }
}

const u = new User("Cristian Corrales");
