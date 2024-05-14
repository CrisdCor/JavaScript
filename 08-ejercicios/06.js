function dividePorTipo(arr) {
  return arr.reduce((acc, el) => {
    let llave = typeof el;

    acc[llave] = acc[llave] ? acc[llave] : []; //Esta línea lo que hace es que en el caso de que no haya un elemento con esta propiedad crea un array vacío o sino lo agrega
    acc[llave].push(el);
    return acc;
  }, {});
}

const miArray = ["Hola", 12, true, "Mundo", {}, { id: 15 }, ["lala"], false];

let arr = dividePorTipo(miArray);
console.log(arr);
