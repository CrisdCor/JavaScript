let collection = document.getElementsByTagName("p");
let list = document.querySelectorAll("p");
console.log(collection, list);

// let item1 = collection.namedItem("chanchito"); // En las collection podemos buscar los elementos por su propiedad de name
// let item2 = collection.item(3);
// let item3 = collection[3]; // se puede buscar el elemento como si fuera un array, pero no lo es

// FORMAS DE ITERAR ELEMENTOS
// Forma 1
// for (let el of collection) console.log(el);

// Forma 2
// Array.from(collection).forEach((c) => console.log(c)); // de esta manera no se accede al elemento sino al objeto mismo

// Forma 3
// [...collection].forEach((c) => console.log(c)); // De esta manera se accede al elemento

// ********************************************************************************************************************
// Métodos que contienen las NodeList
// ********************************************************************************************************************

// let item1 = list.item(3);
// let item2 = list[3];

// list.forEach((l) => console.log(l)); // De esta forma itera como elementos

// entries, keys y values
// Esto devuelve iteradores y no un array

let entries = list.entries();
let keys = list.keys();
let values = list.values();

// En caso de que necesitemos todos los métodos de los arrays debemos hacer un destructuring
[...list].forEach((l) => console.log(l));
