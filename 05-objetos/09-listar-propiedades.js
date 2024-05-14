const punto = {
  x: 10,
  y: 15,
  //   dibujar: function () {
  //     console.log("Dibujando...");
  //   },
  // Otra forma de definir un método es la siguiente
  // dibujar() {
  //   console.log("Dibujando...");
  // },
};

// delete punto.dibujar;

// De esta forma podemos verificar si un objeto tiene una propiedad o método en partícular
// if ("dibujar" in punto) {
//   punto.dibujar();
// }

// Listar las propiedades de un objeto
// Forma 1
// console.log(Object.keys(punto));

// Forma 2 - De esta forma desencapsulamos las propiedades
// let keys = Object.keys(punto);
// console.log(keys);

// Acá ya podemos acceder a listar los VALORES del objeto
// for (let llave of Object.keys(punto)) {
//   console.log(llave, punto[llave]);
// }

// Otra forma de listar los VALORES con el método Entry
// for (let entry of Object.entries(punto)) {
//   console.log(entry);
// }

// Esta es la funcionalidad más nueva
for (let llave in punto) {
  console.log(llave, punto[llave]);
}
