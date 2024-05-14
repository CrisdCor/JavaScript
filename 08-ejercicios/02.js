const miArray = ["Hola", 12, "Mundo", {}, { id: 15 }, ["lala"]];

function dividePorTipo(arr) {
  return {
    numero: arr.filter((n) => typeof n === "number"),
    strings: arr.filter((n) => typeof n === "string"),
    objetos: arr.filter((n) => typeof n === "object"),
  };
}

const nuevArray = dividePorTipo(miArray);
console.log(nuevArray);
