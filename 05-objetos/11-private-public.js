function Usuario() {
  let id = 1;
  this.name = "Cristian";
  let log = function () {
    console.log("logging...");
  };
  this.guardar = function () {
    log();
    console.log("guardando...");
  };
}

const usuario = new Usuario();
usuario.guardar();
