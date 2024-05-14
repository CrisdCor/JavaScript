const letras = ["a", "b"];

// Agregar contenido al final del array
letras.push("c", "d");
// Agregar contenido al inicioi del  array
letras.unshift("y", "z");
// Agregar contenido en un punto específico - el segundo argumento es la cantidad de elementos que se desean eliminar
// Este método ingresa los elementos a lado izquierdo del elemento indicado
letras.splice(3, 0, 1, 2);

console.log(letras);
