const numeros = [1, 2, 3, 4];

/**
 * Esta función recibe dos parámetros:
 * argumento 1: acumulador
 * argumento 2: el elemento que estamos iterando
 * argumento 3: Posterior a la función se viene un tercer argumento que indica el valor inicial que tendrá el acumualdor
 */
// const suma = numeros.reduce((acc, el) => {
//   return acc + el;
// }, 0);

// console.log(suma);

/**
 * El ejemplo también se puede llevar a cabo entre arrays
 * Esto se conoce como aplanar el array obteniendo la siguiente forma
 * [1, 2, 3, 4, 5]
 */
// const anidado = [[1, 2], 3, [4, 5]];

// const plano = anidado.reduce((acc, el) => acc.concat(el), []);

// console.log(plano);

/**
 * También puede usarse cuando se tiene un array demasiado extenso
 * Esto se usaría para un caso en que el array sea ridículamente grande, de millones de registros
 */
let usuarios = [
  { edad: 17, nombre: "Cristian" },
  { edad: 25, nombre: "Chanchito" },
  { edad: 13, nombre: "David" },
  { edad: 32, nombre: "Nicolas" },
];

const indexado = usuarios.reduce(
  (acc, el) => ({
    ...acc,
    [el.nombre]: el,
  }),
  {}
);

console.log(indexado);
