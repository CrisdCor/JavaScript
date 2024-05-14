let afuera = "estoy afuera"; // Esta variable si podrá ser llamada y manipulada dentro de una función

function alcance() {
  console.log(afuera);

  function saludo() {}
  var vieja = "No usar";
  let variable = "Hola Mundo";
  const constante = "Hola mundo constante";
  // las funciones y variables que se creen dentro de otra función no pueden ser utilizadas por fuera de ellas
  console.log(saludo);
  console.log(vieja);
  console.log(variable);
  console.log(constante);
}

alcance();
