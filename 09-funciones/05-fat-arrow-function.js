// Las fat arrow functions son versiones reducidas de las funciones, por lo tanto
// No tienen ARGUMENTS
// super, this
// Estas solo deben usarse para realiza cáclculos

const suma(a, b) => {
  return Array.from(arguments).reduce((acc, el) => acc + el, 0);
  //   let total = 0;
  //   for (let valor of arguments) {
  //     total += valor;
  //   }
  //   return total;
}

console.log(suma(1, 2, 3, 4));
