function Select() {}
Select.prototype.render = function () {
  return console.log("renderizando select..."); // Acá se podría cambiar directamente a una etiqueta de select de html y funcionaría
};

function Checkbox() {}
Checkbox.prototype.render = function () {
  console.log("renderizando checkbox...");
};

let componentes = [new Select(), new Checkbox()];

componentes.forEach((c) => c.render());
