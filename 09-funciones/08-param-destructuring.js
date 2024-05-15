// function webserver(config) {
//   //   const url = config.url;
//   const { url } = config; // Esta forma crea una constante, extrayendo le propiedad de url del objeto config
//   return url;
// }

// Una forma más simple sería la siguiente
// function webserver({ url }) {
//   return url;
// }

// *****************************************************************************************************
// También se puede realizar intentando o procesando un destructuring de propiedades que contengan objetos
// const config = {
//   url: "https://holamundo.io",
//   dirección: {
//     calle: 37,
//     numero: 102,
//   },
// };

// En la siguiente función podemos acceder a las propiedades de dirección
// Esta forma se puede volver engorrosa demasiado rápido, si puedes evitar esta forma mejor
// function webserver({ url, dirección: { calle } }) {
//   console.log(calle);
//   return url;
// }
// console.log(webserver(config));

// *****************************************************************************************************
// Ahora el destructurin pero con un array
// const config = ["https://holamundo.io", 145, 80];

// function webserver(configuracion) {
//   //   const url = configuracion[0] Forma 1
//   const [url, bucket, port] = configuracion; // Con destructuring
//   return url;
// }

// console.log(webserver(config));

// *****************************************************************************************************
// Ahora el destructurin pero con un array y usando el spread operator
// const config = ["https://holamundo.io", 145, 80];

// function webserver([url, ...rest]) {
//   console.log(rest);
//   return url;
// }

// console.log(webserver(config));

// *****************************************************************************************************
// También se puede hacer con un objeto
const config = {
  url: "https://holamundo.io",
  dirección: {
    calle: 37,
    numero: 102,
  },
};

// Forma 1 con destructuring
// function webserver({ url, ...rest }) {
//   console.log(rest);
//   return url;
// }
// console.log(webserver(config));

// Forma 2 sin el destructuring
function webserver(config) {
  const { url, ...rest } = config;
  console.log(rest);
  return url;
}
console.log(webserver(config));
