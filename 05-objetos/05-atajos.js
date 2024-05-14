let obj = {};
let obj1 = new Object();

/**
 * new Array(); []
 * new String(); "", '', ``
 * new Number() ; 12
 * new Boolean(); true, false
 */

function Usuario() {
  this.name = "Chanchito feliz";
}

let user = new Usuario();
console.log(user.constructor);

// Cuando se consulta el tipo de una variable generada con un constructor el resultado será un objeto.

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(s2.valueOf());

// Es importrante resaltar que los number y los boolean también pueden ser accedidos con el método valueOf()
