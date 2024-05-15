/**
 * Mi solución
 */

// function ordenar(texto, fn) {
//   let nuevoTexto = texto.replace(" ", "").toLowerCase();
//   let textoOrdenado = nuevoTexto.split("").sort();
//   let textoFinal = textoOrdenado.join("");

//   fn(textoFinal);
// }

/**
 * Solución del profesor
 */
function ordenar(texto, fn) {
  let nuevoTexto = texto
    .toLowerCase()
    .split("")
    .filter((letra) => letra !== " ")
    .sort()
    .join("");

  fn(nuevoTexto);
}

ordenar("hola mundo", console.log);
