const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "premium" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

/**
 * *******************************************************************************************************************************
 * Solución hecha por mi
 */

// function cuantosPremium(usrs) {
//   usrs = usuarios.filter((u) => u.plan != "free");
//   return usrs.length;
// }

// function cuantosMayores(usrs) {
//   usrs = usuarios.filter((u) => u.edad > 17);
//   return usrs.length;
// }

/**
 * *******************************************************************************************************************************
 * Solución del profesor
 * Se aprendió en la solución del profesor que se deben repasar las arrow function y las ternarias
 */

function cuantosPremium(usrs) {
  return usrs.reduce((acc, el) => (el.plan !== "free" ? acc + 1 : acc), 0);
}

function cuantosMayores(usrs) {
  return usrs.reduce((acc, el) => (el.edad > 17 ? acc + 1 : acc), 0);
}

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));
