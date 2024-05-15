/**
 * En los mixins se debe escribir un poco más, pero su principal ventaja es que componer las funcionalidades es sumamente fácil
 */

// let vuela = {
//   vuela() {
//     console.log("Volando...");
//   },
// };

// let nada = {
//   nada() {
//     console.log("Nadando...");
//   },
// };

// let bano = {
//   bano() {
//     console.log("Yendo al baño...");
//   },
// };

// let camina = {
//   camina() {
//     console.log("Caminando...");
//   },
// };

// // vuela, nada, camina, va al baño
// function Pato() {
//   this.name = "Patito";
// }
// // Object.assign(Pato.prototype, nada, bano, camina, vuela);

// // camina, nada, va al baño
// function Perro() {}
// Object.assign(Perro.prototype, nada, bano, camina);

// // nada, va al baño
// function Pez() {}
// Object.assign(Pez.prototype, nada, bano);

// // vuela pero no nada, no camina ni va al baño
// function Avion() {}
// Object.assign(Avion.prototype, vuela);

// function mixin(Ctr, ...args) {
//   Object.assign(Ctr.prototype, args);
// }

/**
 * A otros desarrolladores les gusta esconder la funcionalidad detrás de una función de mixin
 */

function mixin(Ctr, ...args) {
  Object.assign(Ctr.prototype, ...args);
}

let vuela = {
  vuela() {
    console.log("Volando...");
  },
};

let nada = {
  nada() {
    console.log("Nadando...");
  },
};

let bano = {
  bano() {
    console.log("Yendo al baño...");
  },
};

let camina = {
  camina() {
    console.log("Caminando...");
  },
};

// vuela, nada, camina, va al baño
function Pato() {
  this.name = "Patito";
}
mixin(Pato, nada, bano, camina);

// camina, nada, va al baño
function Perro() {}
mixin(Perro, nada, bano, camina);

// nada, va al baño
function Pez() {}
mixin(Pez, nada, bano);

// vuela pero no nada, no camina ni va al baño
function Avion() {}
mixin(Avion, vuela);
