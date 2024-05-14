let resoluciones = [
  {
    nombre: "8K",
    ancho: 7680,
    alto: 4320,
  },
  {
    nombre: "4K",
    ancho: 3840,
    alto: 2160,
  },
  {
    nombre: "WQHD",
    ancho: 2560,
    alto: 1440,
  },
  {
    nombre: "FHD",
    ancho: 1920,
    alto: 1080,
  },
  {
    nombre: "HD",
    ancho: 1280,
    alto: 720,
  },
];

function nombreResolucion(ancho, alto) {
  for (let resol in resoluciones) {
    if (
      ancho >= resoluciones[resol].ancho &&
      alto >= resoluciones[resol].alto
    ) {
      return resoluciones[resol].nombre;
      break;
    }
  }
}

let nombre = nombreResolucion(3840, 2160);
console.log(nombre);
