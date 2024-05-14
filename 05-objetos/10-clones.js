let punto = {
  x: 10,
  y: 15,
};

// Este método permite asignar las propiedades que se encuentran a la derecha en objetos de la izquierda
// Object.assign(punto, { z: 20 });
// console.log(punto);

// De la siguiente manera podemos utilizar el objeto de assign para clonar objetos
// let clonePunto = Object.assign({}, punto, { z: 20 });
// console.log(punto, clonePunto);

// Si agregamos otra propiedad al objeto literal que ya tiene punto, este reemplaza el valor ya existente, es decir lo sobrescribe
// let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });
// console.log(punto, clonePunto);

// Para obtener referencias se hace lo siguiente
let referencia = Object.assign(punto, { z: 20, x: 1 });
let clonePunto = Object.assign({}, punto, { z: 20, x: 1 });
console.log(punto, clonePunto);
console.log(referencia);

// Esta es una forma algo anticuada de como generar copias de un objeto
let copiaPunto = Object.assign({}, punto);
console.log(copiaPunto);

// Una forma más moderna es la siguiente
let copia2 = { ...punto };
console.log(copia2);

// Formas más antigua, no se recomienda usarla, pero en un proyecto existente se puede encontrar
let copia3 = {};
for (let llave in punto) {
  copia3[llave] = punto[llave];
}
console.log(copia3);
