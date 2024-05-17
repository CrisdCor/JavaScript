let form = document.createElement("form");
form.id = "mi-formulario";
let input = document.createElement("input");
input.setAttribute("type", "text");
let btn = document.createElement("button");
btn.innerText = "enviar";
form.append(input);
form.append(btn);

document.body.append(form);

// EVENTOS
// Este evento se dispara cuando se pos el mouse por encima
// e: es la forma corta de decir evento

form.onmouseenter = (e) => {
  console.log("entra el mouse", e);
};

form.onmouseleave = (e) => {
  console.log("sale el mouse");
};

input.onfocus = (e) => {
  console.log("input con focus");
};

input.onblur = (e) => {
  console.log("input perdió el foco"); // se activa al momento de dar clic fuera de un elmento que antes era el foco
};

input.onchange = (e) => {
  console.log("valor cambia en el input", e.target.value);
};

// btn.onclick = (e) => {
//   e.preventDefault(); // Esto evita que la página se refresque por defecto como viene el botón
//   console.log("botón cliqueado");
// };

// Algunas aplicaciones también ejecutaran el método de addevenlistener

btn.addEventListener("click", (e) => {
  e.preventDefault(); // Esto evita que la página se refresque por defecto como viene el botón
  console.log("botón cliqueado");
});
