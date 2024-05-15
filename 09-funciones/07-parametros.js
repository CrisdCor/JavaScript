/**
 * {
 * url: ...
 * bucket: amazon S3 (un bucket se refiere a donde yo quiero almacenar los archivos de mi aplciación)
 * port: 80
 * }
 */

// Igualar el parámetro a un valor genera un valor por defecto en caso no enviarse
// ningún argumento
// function configurarAPI(url = "https://holamundo.io") {
//   return `${url}`;
// }
// console.log(configurarAPI());
// console.log(configurarAPI("https://cristiancorrales.xyz"));
// Esto nos permite conectarnos a varias API desde la misma función

// ***************************************************************************************
const config = {
  url: "https://holamundo.io",
};

function configurarAPI(url, bucket = 145, port = 80) {
  return `${url}/${bucket}:${port}`;
}

console.log(configurarAPI("holamundo.io"));
