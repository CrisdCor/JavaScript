const user = { id: 1 };

user.name = "Cristian";
user.guardar = function () {
  console.log("Guardando", user.name);
};

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

// De esta manera se evita que el objeto se pueda modificar
const user1 = Object.freeze({ id: 1 });
user1.name = "Nico";
user1.id = "2";
console.log(user1);

//  Para evitar agregar propiedades de un objeto pero permitir modificar las existenes se utiliza el siguiente método
const user2 = Object.seal({ id: 1 });
user2.name = "Nico";
user2.id = "2";
console.log(user2);
