function crearUsuario(name, email) {
  return {
    email: email,
    name: name,
    activo: true,
    recuperarClave: function () {
      console.log("recuperando clave...");
    },
  };
}

let user1 = crearUsuario("Cristian", "cristian.corrales@gmail.com");
let user2 = crearUsuario("David", "david.ospina@gmail.com");

console.log(user1, user2);
