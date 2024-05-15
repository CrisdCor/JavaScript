Object.prototype.isEqual = function (obj) {
  // ...Para el ejemplo la lógica es indiferente
};

let x = {};
x.isEqual({ a: 1 });
// Esta forma puede presentar inconvenientes al momento de implementar librerías en el proyecto
// No se recomienda hacerlo
