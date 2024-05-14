// {id: 1, recuperarClave: function(){}}

function Usuario() {
  this.id = 1;
  this.recuperarCalve = function () {
    // Ya no se llama función y se conocerá como método, un método es una función que fue asignada a una propiedad de un objeto
    console.log("recuperando clave...");
  };
}

let usuario = new Usuario();
// Cuando se una la palabra reservada new sucede lo siguiente
// Se crea un objeto literal del aire
// Se vincula el prototipo de la función con el objeto que se acaba de crear
// El objeto vacío que se creó se asigna a la palabra reservada de this. this={}
// Si la función constructora no retorna nada, entonces retornará this

console.log(usuario);
