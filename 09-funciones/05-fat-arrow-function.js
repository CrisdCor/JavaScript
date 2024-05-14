// function suma(a, b) {
//   return a + b;
// }

// console.log(suma(1)); // En estos casos devuelve NaN (Not a number), ya que intenta sumar el argumento más undefined
// console.log(suma()); // Igual para este caso porque sería operar unidefined + undefined
// console.log(suma(1, 2));
// console.log(suma(1, 2, 3, 4)); // En este caso sigue operando sin problema pero ignora los parámetros adicionales

function suma(a, b) {
  //   let total = 0;
  //   for (let valor of arguments) {
  //     total += valor;
  //   }
  //   return total;
  // La mejor forma de trabajar con es a través del siguiente método
  return Array.from(arguments).reduce((acc, el) => acc + el, 0);
}

console.log(suma(1, 2, 3, 4)); // Se crea un iterator o un iterador de cada uno de los argumentos que se incluyeron
