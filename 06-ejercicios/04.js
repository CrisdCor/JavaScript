let objeto = {
  id: 1,
  name: "chanchito",
  login: function () {},
  logout: function () {},
};

function cualesMetodos(obj) {
  let esMetodo;
  for (let llave in obj) {
    if (typeof obj[llave] === "function") {
      esMetodo = console.log(llave);
    }
  }
  return esMetodo;
}

cualesMetodos(objeto);
