function User() {
  this.name = "Crstian Corrales";
}

User.prototype.login = function () {
  console.log("iniciando sesión", this.name);
};

let user = new User();

for (let prop in user) console.log(prop); // For se encarga de iterar todas las propiedades que se encuentran también en el prototipo, solo en un nivel

// Esta es la forma antigua de iterar las propiedades de un objeto de forma propia ignorando las del prototipo
for (let prop in user) {
  if (user.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// Si queremos que solo nos muestre las del prototipo de siguiente nivel entonces negamos la validación del if
for (let prop in user) {
  if (!user.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

// En el caso de que solo necesitemos un array que contenga las propiedades del objeto de la instancia misma hacemos lo siguiente:

console.log(Object.keys(user));
