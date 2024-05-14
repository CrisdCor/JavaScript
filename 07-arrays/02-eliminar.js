const letras = ["a", "b", "c", "d"];

// Elimina el último elemento de un array
letras.pop();
// Además permite que este elemnento se pueda asignar a una variable
const final = letras.pop();
console.log(final);

// Elimina el primer elemento de un array
letras.shift();
// Igual que pop() se puede asignar a una variable

// Elimina elementos que se encuentren en medio de un array - si quiero eliminar más de un argumento
// se modifica la cantidad del seundo argumento
letras.splice(1, 1);

console.log(letras);
