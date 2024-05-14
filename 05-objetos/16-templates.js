const nombre = "Cristian";
const apellido = "Corrales";
const nombreCompleto = nombre + " " + apellido;

const plantilla1 = `Hola ${nombreCompleto}!

Bienvenidos a "Ultimate JavaScript" ;)

`;

// Esta plantilla de igual forma se puede incluir dentro de una función
function plantilla(nombre) {
  return `Hola ${nombre}!

Bienvenidos a "Ultimate JavaScript" ;)
    
`;
}

console.log(plantilla(nombreCompleto));
