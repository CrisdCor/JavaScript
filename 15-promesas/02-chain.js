let promesa1 = new Promise((res, rej) => {
  res(12);
});

let promesa2 = new Promise((res, rej) => {
  res(15);
});

// promesa1
//   .then((valor) => {
//     console.log(valor); // Ejecutar el método de .then, devuelve a su vez una promesa, por lo que podremos nuevamente acceder al método de .then
//     return valor + 18; //Si se retorna algo, este return iría a cargarse al valor del siguiente .then
//   })
//   .then((valor2) => {
//     console.log("La segunda promesa");
//     console.log("La segunda promesa", valor2); // Las promesas siguientes se resuelven pero sin ningún valor
//   });

// Supongamos el ejemplo en el que requiera que el valor sea mayor a 10 para encadenarlo con la promesa 2. El resultado sería el siguiente
// promesa1
//   .then((valor) => {
//     if (valor > 10) {
//       return promesa2;
//     }
//   })
//   .then((valor2) => {
//     console.log("La segunda promesa", valor2);
//   });

// Otro caso de aplicación del ejercicio sería el siguiente
promesa1
  .then((valor) => {
    if (valor > 10) {
      return promesa2;
    }
  })
  .then((valor2) => {
    return valor2;
  })
  .then((valor3) => {
    console.log(valor3);
  });
