// Si queremos ver el nombre y el apellido juntos tendríamos varias formas
// forma 1

// const usuario = {
//   nombre: "Cristian",
//   apellido: "Corrales",
// };

// console.log(`${usuario.nombre} ${usuario.apellido}`);

// forma 2
// Creando un método dentro del objeto

// const usuario = {
//   nombre: "Cristian",
//   apellido: "Corrales",
//   nombreCompleto: function () {
//     return `${usuario.nombre} ${usuario.apellido}`;
//   },
// };

// console.log(usuario.nombreCompleto());

// forma 2
// Creando un método dentro del objeto de manera corta

// const usuario = {
//   nombre: "Cristian",
//   apellido: "Corrales",
//   nombreCompleto() {
//     return `${usuario.nombre} ${usuario.apellido}`;
//   },
// };

// console.log(usuario.nombreCompleto());

// forma 3
// Usando el getter para acceder al elemento como una propiedad

// const usuario = {
//   nombre: "Cristian",
//   apellido: "Corrales",
//   get nombreCompleto() {
//     return `${usuario.nombre} ${usuario.apellido}`;
//   },
// };

// console.log(usuario.nombreCompleto);

// En el caso de que yo quiera asigarle el nombre completo
// Para eso debo agregarle el setter

const usuario = {
  nombre: "Cristian",
  apellido: "Corrales",
  get nombreCompleto() {
    return `${usuario.nombre} ${usuario.apellido}`;
  },
  set nombreCompleto(valor) {
    const [nombre, apellido] = valor.split(" ");
    this.nombre = nombre;
    this.apellido = apellido;
  },
};

usuario.nombreCompleto = "David Corrales";
console.log(usuario.nombreCompleto);
