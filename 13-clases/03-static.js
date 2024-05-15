class Restaurants {
  static cantidad = 12; // Los static también pueden implementarse en propiedades
  constructor(name) {
    this.name = name;
  }

  getTimetable() {
    // obtener el horario
    console.log("horario del restaurante");
  }
  static getRestaurant(id) {
    return new Restaurants("BBQ");
  }
}

// const r = new Restaurants(); // Esto no tendría mucho sentido

// Si tendría sentido que la clase de restaurante tenga un método que me permita obtener un restaurante y no se llamaría como la línea anterior sino de la siguiente manera

const r = Restaurants.getRestaurant(12); // Esto se conoce como método estático

// Estos son ejemplos de métodos estáticos que venimos usando a lo largo del curso
// const arr = new Array();
// Array.isArray();
// Array.from();
// Object.from();
