const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 25, nombre: "Felipe", plan: "gold" },
];

/**
 * *******************************************************************************************************************************
 * Esta fue mi solución
 */

// function obtenerMayor(arr) {
//   arr.sort((a, b) => {
//     if (a.edad < b.edad) return -1;
//     if (a.edad < b.edad) return -1;
//     return 0;
//   });
//   ultimoElemento = arr.length - 1;
//   return arr[ultimoElemento];
// }

/**
 * *******************************************************************************************************************************
 * Solución del profesor
 */

function obtenerMayor(arr) {
  let mayor = arr[0];
  for (let usuario of arr) {
    if (mayor.edad < usuario.edad) {
      mayor = usuario;
    }
  }
  return mayor;
}

const mayor = obtenerMayor(usuarios);

console.log(mayor);
