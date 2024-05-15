const usuario = {
  nombre: "Cristian",
  ciudadania: ["Chile", "Colombian", "Japonés"],
  mostrarCiudadanias() {
    this.ciudadania.forEach((ciudadania) => {
      // Si se intenta accader con this en una función no se podrá, se tiene que realizar con una arrow function
      console.log(this.nombre, ciudadania);
    });
  },
};

usuario.mostrarCiudadanias();
