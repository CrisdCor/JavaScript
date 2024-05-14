const usuarios = [
  { edad: 17, nombre: "Nico", plan: "premium" },
  { edad: 13, nombre: "Chanchito", plan: "free" },
  { edad: 32, nombre: "Fernanda", plan: "free" },
  { edad: 15, nombre: "Felipe", plan: "gold" },
];

// 1. Obtener los usuarios pago
// 2. Ordenar de mayor a menor edad
// 3. Devolver el nombre del usuario
// 4. Crear una plantilla HTML
// 5. Imprimirla en consola

function usuariosPago(arr) {
  arr.sort((a, b) => {
    if (a.edad < b.edad) return -1;
    if (a.edad > b.edad) return 1;
    return 0;
  });
  const lista = arr
    .filter((u) => u.plan !== "free")
    .map((u) => `<li>${u.nombre}</li>`);

  const plantillaHtml = `<ul>
    ${lista.join(`
    `)}
</ul>`;
  return plantillaHtml;
}

console.log(usuariosPago(usuarios));
