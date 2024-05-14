let usuarios = [
  { edad: 17, nombre: "Cristian" },
  { edad: 25, nombre: "Chanchito" },
  { edad: 13, nombre: "David" },
  { edad: 32, nombre: "Nicolas" },
];

// "u" hace referencia al elemento individual del array y agregará a un nuevo array siempre y cuando cumpla la condición planteada
const mayores = usuarios.filter((u) => u.edad > 17);
const menores = usuarios.filter((u) => u.edad < 18);
console.log(mayores);
console.log(menores);
