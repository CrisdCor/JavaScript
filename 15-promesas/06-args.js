let promesa1 = (user) =>
  new Promise((res, rej) => {
    res(user);
  }); // trnasformando una promesa en una fat arrow function se permite pasar argumentos a la promesa

let promesa2 = (user) =>
  new Promise((res, rej) => {
    res(user + ", Bienvenido"); // de esta manera puedo inyectarlo los datos de la promesa 1 en la siguiente promesa
  });

promesa1("Cristian Corrales")
  .then((user) => promesa2(user)) // ya agregado el argumento a través de la arrow function, se puede llamar la promesa y entregar el usuario como argumento
  .then((dato) => console.log(dato)); // Luego de inyectados los datos, puedo hacer uso de ellos en el siguiente Then
