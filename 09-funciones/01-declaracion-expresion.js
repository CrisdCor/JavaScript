console.log(suma);

//  Declaración de funciones: Function Declaration

/**
 * Función nombrada: Named function
 */
function suma() {
  console.log("sumando...");
}

/**
 * Función anónima: Anonimus function
 * Esto se puede hacer cuando la función va a ejecutarse de forma inmediata
 */

[].map(function () {
  console.log("función anónima");
});

/**
 * Expresión de funciones: Functin expression
 */
let resta = function () {
  // anonymus function expression
  console.log("restando...");
};

let multiplica = function multi() {
  // named function expression
  console.log("multiplicando...");
};

// Expresión de función con una arrow function
const divide = () => {
  // esta siempre será anónima
  console.log("dividiendo...");
};
