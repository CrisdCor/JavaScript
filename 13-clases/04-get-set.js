class Restaurants {
  #timetable;
  constructor(name) {
    this.name = name;
  }
  // Para crear las validaciones podemos usar los getters y setters
  get timetable() {
    return this.#timetable;
  }
  set timetable(value) {
    let date = new Date(value);
    let time = date.getTime();
    if (Number.isNaN(time)) {
      throw new Error("Fecha inválida");
    }
    this.#timetable = date;
  }
}

const r = new Restaurants("BBQ");

r.timetable = "1 Apr 1923";

// r.timetable = "1 march 1978"; // Esta forma no evitaría que se pase un dato que no corresponda a una fecha. Para eso se utilizan los setter
