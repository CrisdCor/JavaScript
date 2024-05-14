const ahora = new Date();

// Trabaja con formato americano: Mes Dia Año
const fecha = new Date("October 31 1987 07:00");
console.log(fecha);

const fecha2 = new Date(1987, 9, 31, 14, 15);
console.log(fecha2);

const fecha3 = new Date(1987, 9, 31, 14 + 15, 15);
console.log(fecha3);

// Obtener las fechas en formato internacional a través de métodos
console.log("datestring", fecha2.toDateString());
console.log("ISOstring", fecha2.toISOString());
console.log("timestring", fecha2.toTimeString());

console.log("Obtener datos de la fecha", fecha2.getDate());
fecha2.setFullYear(2024);
console.log(fecha2);
