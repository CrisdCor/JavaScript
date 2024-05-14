// 1. Unificar las estructuras de usuarios y user
// 2. Fusinonar los array
// 3. Ordenar por edad
// 4. Crear una plantilla HTML: con los siguiente datos de los usuarios:
// <li> Nombre: name, Edad: age </li>
// Imprimir en consola

const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 15, nombre: "Felipe", plan: "gold" },
];

const users = [
  { age: 22, name: "Michael", membership: "premium" },
  { age: 27, name: "Kevin", membership: "free" },
  { age: 29, name: "Happy pig", membership: "free" },
];

// 1. Unificar las estructuras de usuarios y user

// const nuevosUsuarios = [];
// for (u of users) {
//   let usuario = {
//     edad: u.age,
//     nombre: u.name,
//     plan: u.membership,
//   };
//   nuevosUsuarios.push(usuario);
// }

// Unificación de las estructuras del profesor
const nuevosUsuarios = users.map((u) => ({
  edad: u.age,
  nombre: u.name,
  plan: u.membership,
}));

// 2. Fusinonar los array

const usuariosConcat = [...usuarios, ...nuevosUsuarios];

// 3. Ordenar por edad

usuariosConcat.sort((a, b) => {
  if (a.edad > b.edad) return -1;
  if (a.edad < b.edad) return 1;
  return 0;
});

// 4. Crear una plantilla HTML: con los siguiente datos de los usuarios:
// <li> Nombre: name, Edad: age </li>

const lista = usuariosConcat.map(
  (u) => `<li>Nombre: ${u.nombre}, Edad: ${u.edad}</li>`
);

const plantillaHtml = `<ul>
    ${lista.join(`
    `)}
</ul>`;

// Imprimir en consola

console.log(plantillaHtml);
