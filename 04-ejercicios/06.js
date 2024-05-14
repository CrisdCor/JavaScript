let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
  let postivos = 0;
  for (i of arr) {
    if (i > 0) {
      postivos += 1;
    }
  }
  return postivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
