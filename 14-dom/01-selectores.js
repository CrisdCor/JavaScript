// Este selector devuelve un HTML__Element (en medio entrega el tipo de elemento que es)
let htmlELement = document.getElementById("cuerpo");

// Este selector devuleve un HTMLCollection, parece un array pero no lo es
let elementosRed = document.getElementsByClassName("red");

// Este selector devuleve un NodeList, se parece a un HTMLCollection, pero tiene unas diferencias sutiles importantes a la hora de manipular el DOM
let elementosChanchito = document.getElementsByName("chanchito");

// Este selector devuleve un HTMLCollection, parece un array pero no lo es
let parrafos = document.getElementsByTagName("p");

//Este selector devuelve solo un HTMLElement
// Si queremos buscar por id usamos el #
// Si queremos buscar por la class utilizamos el .
let el = document.querySelector("#cuerpo");
let els = document.querySelectorAll("p"); // funciona igual que el anterior pero selecciona todos los elementos y devuelve una Nodelist

/**
 * Observaciones:
 * 1. Los métodos de querySelector son método lentos, ya que buscarán a lo largo de todo el documento a diferencia que los anteriores que buscan directamente en el índice,
 * no es un problema porque no es normal de que se tengan demasiados elementos en una página pero es importante tenerlo en cuenta
 *
 * 2. Diferencia entre HTMLCollection y NodeList
 * Con el HTMLCollection no importa cuantas veces manipulemos o modifiquemos el DOM estas siempre reflejan lo últimos cambios del DOM
 * En cambio NodeList no siempre sincroniza con los cambios que tengamos en el DOM
 */
