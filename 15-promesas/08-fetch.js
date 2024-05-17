/**
 * Url: https://jsonplaceholder.typicode.com/
 */

// **********************************************************************************************************************************************************************************************
let topic = "FETCH";
let title = document.createElement("div");
title.innerText = topic;
document.body.append(title);
// **********************************************************************************************************************************************************************************************

/**
 * FETCH
 * La función de "fetch" devuelve una promesa y recibe dos argumentos:
 * Primer argumento: "url" a la que queremos ir
 * Segundo argumento: opciones que le podemos pasar a la promesa
 * Cuanto trabajamos con "fetch" este siempre tendrá éxito independiente de lo que nos devuelva el servidor
 * Si el servidor devuelve un error, el código siempre tendrá "éxito", restaltando las comillas
 */

const url = "https://jsonplaceholder.typicode.com/todos/a";
fetch(url)
  .then((response) => {
    if (response.ok) {
      // la proiepdad de .ok devolverá "false" siempre y cuando el código no se encuentre entre 200 - 299
      //   return response.json();
      return response.text();
    }
    return Promise.reject(response.status);
    // return response.json(); // Este en caso de que se tenga un json
    // return response.text(); // Puede suceder que la API esté devolviendo otro tipo de elemento como un texto, este sería el metodo para captarlo
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
