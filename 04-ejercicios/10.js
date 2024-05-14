let longitud = 9;

function crearArray(n) {
  let lista = [];
  for (let idx = 0; idx < n; idx++) {
    let elemento = idx + 1;
    lista[idx] = elemento;
  }
  return lista;
}

let resultado = crearArray(longitud);
console.log(resultado);
