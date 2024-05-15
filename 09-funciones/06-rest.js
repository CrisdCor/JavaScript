function suma(a, b, ...rest) {
  // El parámetro de rest siempre debe ir de último
  //   Despues de los 3 puntos se escribe el nombre del parámetro que indica todo lo demás
  // Esto no significa que tenga que llamarse rest
  console.log(rest);
}
// suma(1, 2, 3, 4);

// Funciona como arrow function
const suma2 = (a, b, ...rest) => {
  console.log(rest);
};
// suma2(1, 2, 3, 4, 5, 6);

// Aplicación de la vida real
const logMsg = (desc, ...msgs) => {
  for (let msg of msgs) {
    console.log(desc, msg);
  }
}; // Este proceso es viable con las fat arrow function y las funciones normales

// logMsg("Servidor:", "Error 1", "Petición aceptada", "Socket activo");

let mensajes = ["Error 1", "Petición aceptada", "socket activo"];
logMsg("Cliente móvil:", ...mensajes, "Otro error!"); // En este caso SI se puede agregar argumentos después de rest
