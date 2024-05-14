let arr1 = ["Cristian", "Corrales", "David"];

// Método para unir
let mensaje = arr1.join(", "); // Este método viene con un parámetro opcional de seleccionar un separador, en caso de no indicarlo por defecto separa con coma
console.log(mensaje);

// Método para separar
let saludo = "Hola mundo desde CO";
let dividido = saludo.split(" "); // En este caso el separados es obligatorio
console.log(dividido);

// Ejemplo con URL
let tipoURL = dividido.join("/");
console.log(tipoURL);
