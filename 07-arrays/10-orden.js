// let numeros = [15, 10, -3];

// numeros.sort();
// numeros.reverse();
// console.log(numeros);

// let letras = ["z", "a", "d"];
// letras.sort();
// letras.reverse();
// console.log(letras);

// let conMayusuclas = ["Z", "a", "d"];
// conMayusuclas.sort((a, b) => {
//   /**
//    * a antes b => -1
//    * b antes a => 1
//    * si son iguales => 0
//    */
//   let alower = a.toLowerCase();
//   let blower = b.toLowerCase();

//   if (alower < blower) {
//     return -1;
//   }
//   if (alower > blower) {
//     return 1;
//   }
//   return 0;
// });

// console.log(conMayusuclas);

let usuarios = [
  { edad: 15, nombre: "Cristian" },
  { edad: 25, nombre: "David" },
  { edad: 13, nombre: "Chanchito" },
];

usuarios.sort((a, b) => {
  /**
   * a antes b => -1
   * b antes a => 1
   * si son iguales => 0
   */

  if (a.edad < b.edad) return -1;
  if (a.edad < b.edad) return 1;
  return 0;
});

console.log(usuarios);
