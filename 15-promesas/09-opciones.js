// **********************************************************************************************************************************************************************************************
let topic = "OPCIONES";
let title = document.createElement("div");
title.innerText = topic;
document.body.append(title);
// **********************************************************************************************************************************************************************************************

const url = "https://jsonplaceholder.typicode.com/todos/";
// El segundo argumento de "fetch" corresponde al verbo que deseamos utilizar
fetch(url, {
  method: "POST", // PUT, PATCH, DELETE, GET (este último es el valor por defecto que trae el método en caso de no especificar "method")
  body: JSON.stringify({ title: "Hola mundo" }), // Se envía los datos
  headers: {
    "Content-Type": "application/json",
    Authorization: "api key",
  }, // este debe contener nuestras credenciales que le enviaremos al servidor y también sirve para indicarle al servidor que los datos que estamos enviando son tipo "json"
  cache: "no-cache", // default, reload, force-cache, only-if-cache
})
  .then((response) => {
    if (response.ok) {
      return response.text();
    }
    return Promise.reject(response.status);
  })
  .then((data) => console.log(data))
  .catch((message) => console.log({ message }));
