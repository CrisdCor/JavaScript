// **********************************************************************************************************************************************************************************************
let title = document.createElement("div");
title.innerText = "PARALELO";
document.body.append(title);
// **********************************************************************************************************************************************************************************************

const p1 = Promise.resolve(3);
const p2 = 42;
const p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "foo");
});

/**
 * .all es el método que permite procesar las promesas en paralelo
 * En su argumento recibe a través de un array las promesas que se quieren resolver
 * Este método hace que de forma paralela las promesas entren a su estado pendiente
 * y solo hasta que se resuelvan todas las promesas se ejectutará el .then
 * si por alguna razón alguna de las promesas es rechazada en ese caso se ejecutará el método .catch
 */

// Promise.all([p1, p2, p3])
//   .then((valores) => console.log("all", valores))
//   .catch((e) => console.log("Error en all", e));

/**
 * .race recurre a retornar lo primero que suceda, es decir, toma las tres promesas y resuelve o rechaza según sea lo primero que encuentre
 */
// Promise.race([p1, p2, p3])
//   .then((valores) => console.log("race", valores))
//   .catch((e) => console.log("Error en race", e));

/**
 * .any
 * Este método funciona similar a race, la diferencia es que el método tomará la primera promesa que sea resuelta
 * Es decir, si la primera promesa es rechazada, ingorará la respuesta y evaluará la siguiente
 *
 */
// Promise.any([p1, p2, p3])
//   .then((valor) => console.log("any", { valor }))
//   .catch((e) => console.log("Todas las promesas fueron rechazadas", { e }));

/**
 * .allSettled
 * Este método evalúa todas las promesas y devuelve un array con todas las promesas que tiene que resolver
 * En el objeto que retorna devuelve la propiedad de status: la cual indica el resultado de la promesa
 * En el caso de que rechace todas las promesas devuelve la propiedad no de value sino de reason
 * En este método el código siempre se ejecuta y no caerá en el .catch
 */
Promise.allSettled([p1, p2, p3])
  .then((valores) => console.log({ valores }))
  .catch((e) => console.log({ e }));
//
