let objeto = { name: "Nicolas" };

/**
 * Mi solución
 */

// function agregarId(obj) {
//   let id = Math.random();
//   let nuevoObjeto = Object.assign(obj, { id });
//   return nuevoObjeto;
// }

// agregarId(objeto);
// console.log(objeto);

/**
 * Solución del profesor
 */

function agregarId(obj) {
  if (typeof obj === "object") {
    obj.id = Math.random();
  }
  return obj;
}

agregarId(objeto);
console.log(objeto);
