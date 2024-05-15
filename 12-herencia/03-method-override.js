function getProto() {
  return Object.getPrototypeOf(u);
}

function Entidad() {}

Entidad.prototype.save = function () {
  console.log("guardando desde entidad...");
};

function User() {}

// A esto se le conoce como method override
User.prototype.save = function () {
  console.log("guardando desde User");
};

Object.setPrototypeOf(User.prototype, Entidad.prototype);

const u = new User();

// Vamos a ver un caso excepcional y es cuando necesitemos llamar el método de save pero que se encuentra dentro de entidad

console.log(getProto(getProto(u)).save()); // De esta forma accedemos con el metodo de getPrototypeOf al método de save, pero lo mejor es encapsular esto dentro de una función
// La función es la relacionada al comienzo
