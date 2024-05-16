class Entidad {
  constructor(id) {
    this.id = id;
    this.created_at = new Date();
  }
  save() {
    console.log("save de Entidad...");
  }
}

class User extends Entidad {
  constructor(name) {
    super(1);
    this.name = name;
  }
  save() {
    // Para reutilizar la lógica de un método de una clase padre se realiza lo siguiente:
    super.save();
    console.log("save de User...");
  }
}

const u = new User("Cristian Corrales");
