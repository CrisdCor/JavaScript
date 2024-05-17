let promesa1 = new Promise((res, rej) => {
  res(5);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
    // return Promise.reject("Valor menor que 10"); // este método devuelve una promesa estática que ya se encuentra rechazada, es decir, rompe la cadena de promesas
    return Promise.resolve(555);
  })
  .then((valor2) => {
    console.log("segunda promesa", valor2);
    return valor2;
  })
  .catch((e) => console.log(e))
  .finally(() => console.log("aca estamos en finally"));
