/**
 * Solución hecha por mi del ejericio
 */

// function suma(fn, ...rest) {
//   let total = 0;
//   for (let a of rest) {
//     total += a;
//   }
//   fn(total);
// }

/**
 * Solución planteada por el profesor usando reduce
 */

function suma(fn, ...rest) {
  let resultado = rest.reduce((acc, el) => acc + el, 0);
  fn(resultado);
}

suma(
  (resultado) => {
    console.log(resultado);
  },
  1,
  2,
  3,
  4
);
