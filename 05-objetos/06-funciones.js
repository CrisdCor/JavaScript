function Usuario(nombre) {
  this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

// // Una función se puede asignar a una variable.
// const U = Usuario;
// let user = new U("Cristian");

// console.log(user);

// // También se pueden pasar las funciones como argumentos

// function of(Fn, arg) {
//   return new Fn(arg);
// }

// let user1 = of(Usuario, "Chanchito");
// console.log(user1);

// // También podemos retornar las funciones dentro de otras funciones

// function returned() {
//   return function () {
//     console.log("Hola mundo");
//   };
// }

// let saludo = returned();
// saludo();
