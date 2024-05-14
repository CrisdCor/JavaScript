function getbyIdx(arr, idx) {
  if (idx < 0 || idx > arr.length - 1) {
    return "El índice no válido";
  } else {
    return arr[idx];
  }
}

let resultado = getbyIdx([1, 2], 2);
console.log(resultado);
