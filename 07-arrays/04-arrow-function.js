// Las arrow function son totalmente anónimas y para nominarlas se tiene que hacer a través de una constante

// const saludo = () => {
//   "Hola mundo";
// };

// Las arrow function vienen con el return implícito
const saludo = () => "Hola mundo"; // Esto solo aplica si solo se usará una línea, para más líneas es necesario la forma anterior

const saludo2 = (mensaje) => mensaje + " Hola mundo"; // Arrow indicando un solo parámetro

const resultado = saludo3("Cristian");
console.log(resultado);
