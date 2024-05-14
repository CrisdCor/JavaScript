const usuarios = [
  { id: 1, name: "Chanchito" },
  { id: 2, name: "Feliz" },
  { id: 3, name: "Cristian" },
];

const resultado = usuarios.find(function (usuario) {
  return usuario.id === 3; // cuando se usa el método de find hay que asegurar que propiedad de criterio sea única
});

// La función de forma más sencilla de leer con arrow-function
const resultado2 = usuarios.find((usuario) => usuario.name === "Cristian");

// Si requerimos solamente el índice donde se encuentra el elemento usamos el findIndex
const resultado3 = usuarios.findIndex((usuario) => usuario.name === "Cristian");

console.log(resultado);
console.log(resultado2);
console.log(resultado3);
