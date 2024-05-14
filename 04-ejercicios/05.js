let array = [2, 5, 7, 15, -5, -100, 55];

// function getMenorMayor(arr) {
//   nuevaLista = arr.sort();
//   menor = nuevaLista[0];
//   mayor = nuevaLista[arr.length - 1];
//   return [menor, mayor];
// }

// let numeros = getMenorMayor(array);
// console.log(numeros);

function getMenorMayor(arr) {
  let mayor = arr[0];
  let menor = arr[0];
  for (numero of arr) {
    menor = menor < numero ? menor : numero;
    mayor = mayor > numero ? mayor : numero;
  }
  return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros);
