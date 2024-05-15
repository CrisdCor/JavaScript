const obj = {
  nombre: "Nicolas",
};

// function extender(usuario) {
//   return (usuario = {
//     nombre: usuario.nombre,
//     login() {
//       console.log(this.nombre, "...Estamos iniciando tu sesión");
//     },
//     logout() {
//       console.log(this.nombre, "...Estamos cerrando tu sesión");
//     },
//   });
// }

/**
 * Solución del profesor al ejercicio
 */

function extender(usuario) {
  const metodos = {
    login() {
      console.log(this.nombre, "...Estamos iniciando tu sesión");
    },
    logout() {
      console.log(this.nombre, "...Estamos cerrando tu sesión");
    },
  };
  return Object.assign(usuario, metodos);
}

const usuario = extender(obj);

console.log(usuario);
usuario.login();
