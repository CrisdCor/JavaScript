//  short.circuit

// Falso
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = "Cristian Corrales";
let username = nombre || "Anónimo";
console.log(username);

function fn1() {
  console.log("Soy función 1");
  return false;
}

function fn2() {
  console.log("Soy función 2");
  return true;
}

let x = fn1() && fn2();
