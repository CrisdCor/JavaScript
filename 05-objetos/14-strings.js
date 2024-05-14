const saludo = "Hola Mundo!";

const despedida = new String("Chao mundo");

console.log(typeof saludo);
console.log(typeof despedida);

console.log(saludo.length);
console.log(saludo.indexOf("Mu"));
console.log(saludo.indexOf("we"));
console.log(saludo.includes(" Mundo"));
console.log(saludo.includes(" Chao"));
console.log(saludo.replace("Mundo", "Cristian")); // para capturar el nuevo string hay que ingresarlo dentro de una nueva variable
console.log(saludo.toLowerCase());
console.log(saludo.toUpperCase());
console.log(saludo.substring(0, 4));
console.log(saludo.substr(2, 4));

const espacios = "   Hola   Mundo   !  ";
console.log(espacios.trim());
console.log(espacios.trimStart());
console.log(espacios.trimEnd());
