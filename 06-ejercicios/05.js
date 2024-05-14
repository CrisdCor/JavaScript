let objeto = {
  id: 1,
  name: "chanchito",
  login: function () {},
  logout: function () {},
};

let propiedad = "name";

function tieneProp(obj, propiedad) {
  let tienePropiedad = false;
  for (let llave in obj) {
    if (llave == propiedad) {
      tienePropiedad = true;
    }
  }
  return tienePropiedad;
}

console.log(tieneProp(objeto, propiedad));
