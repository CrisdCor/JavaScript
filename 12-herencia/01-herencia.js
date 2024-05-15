/**
 * Normalmente en otros lenguajes de programación se usa la palabra de class para extender de una entidad métodos y usarlos en otros objetos
 * Pero en Javascipt se debe crear un nuevo objeto que se conocería como prototipo
 * Por lo cual los objetos al intentar buscar un método que no se encuentra en él escalará la búsqueda al propotipo
 * Se llama comunmente prototipo, pero en definitiva es otro objeto y se puede escalar en diferentes niveles
 */

// Implementando herencia

function User() {
  this.name = "Cristian Corrales";
}

function Product() {
  this.name = "Producto";
}

function Entidad() {}

Entidad.prototype.save = function () {
  console.log("guardando...", this.name);
};

Entidad.prototype.validate = function () {
  console.log("validando...", this.name);
};

/**
 * Forma 1 de reutilizar el código implementando herencia
 * Estas son las formas antiguas de setear los prototipos
 */

// User.prototype = Object.create(Entidad.prototype);
// User.prototype.constructor = User;

/**
 * Forma 2 implementada a partir de ES6.
 * Esta es la mejor forma de aplicar la herencia en el seteo de propiedades
 */

Object.setPrototypeOf(User.prototype, Entidad.prototype);
Object.setPrototypeOf(Product.prototype, Entidad.prototype);

const user = new User();
console.log(user);
