let usuarios = [
  { id: 1, activo: true },
  { id: 2, activo: false },
  { id: 3, activo: false },
];

// Esta función genera un boolean, y se detiene en cuanto encuentra un valor de falso
// let todosActivos = usuarios.every((u) => {
//   console.log("Todos activos", u.id);
//   return u.activo;
// });

// console.log(todosActivos);

// A diferencia de every este método devuelve el valor hasta que encuentre un valor de true
let algunoActivo = usuarios.some((u) => {
  console.log(u.id);
  return u.activo;
});

console.log(algunoActivo);
