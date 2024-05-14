const letras = ["a", "b", 1, "c", "d", 1];

// Este método busca el index del elemento indicado
console.log(letras.indexOf("c"));
console.log(letras.indexOf(2)); // Si el elemento no existe arrojará el valor de -1
console.log(letras.indexOf(1)); // Si el elemento está varias veces dentro del array te ubicará el primero que encuentre
console.log(letras.lastIndexOf(1)); //Así iniciaría la búsqueda de atrás hacia adelante
console.log(letras.includes("d")); // Identifica en boolean si un elemento se encuetnra dentro del array
console.log(letras.includes("d", 6)); //Para cualquier de estos método el segundo argumento sirve para indicar desde donde se quiere iniciar la búsqueda

// Siempre es importante tener en cuenta que él valida el tipo de dato
