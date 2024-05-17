let promesa1 = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((valor2) => {
    console.log("segunda promesa");
    return valor2;
  })
  .catch((e) => console.log(e)) // el catch sirve para atrapar el error en la lógica que queramos implementar
  .finally(() => console.log("aca estamos en finally")); // el método de finally se ejecutará siempre, es igual si fue aprobada o rechazada, Finally nunca recibe argumento

// Un caso de uso de finally podría ser que mientras se hace una consulta al servidor se muestre un ícono de cargando, sin importar si la consulta es exitosa o no el finally se verá en pantalla
