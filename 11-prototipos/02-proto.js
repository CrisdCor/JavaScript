function User() {
  this.name = "Crstian Corrales";
  //   Método de instancia: Este busca que la instancia tenga su propio método, se hace cuando no es necesario optimizar el código
  this.logger = function () {
    console.log("loggeando...");
    this.login();
  };
}

const user1 = new User();
const user2 = new User();

// Método de prototipo: Se utiliza cuando quiera crear una cadena de prototipos (pototype chain) o cuando quiera optimizar mi código
// Estos puede ser creados después de crear la instancia, lo importante es que esté definido antes de ser llamado
User.prototype.login = function () {
  console.log("iniciando sesión", this.name);
};

// El siguiente código es para interceptar la cadena de prototipos
User.prototype.toString = function () {
  console.log("Usuario:", this.name);
};

console.log(user1);
