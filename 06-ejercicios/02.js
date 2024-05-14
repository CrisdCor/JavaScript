function createUsuario(name) {
  return {
    id: Math.random(),
    name: name,
  };
}

let user = createUsuario("Felipe");
let user2 = createUsuario("Chanchito");
console.log(user, user2);
