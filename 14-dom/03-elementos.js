// De esta manera se crea e insertan elementos en un HTML

let el = document.createElement("p");
el.innerHTML = "<ul><li>Hola Mundo</li></ul>"; // Este permite inserta un HTML
// el.innerText = "Elemento creado con innerText"; // Este no permite insertar un HTML

// Para cambiar los estilos se utiliza la siguiente propiedad
el.style = "backgorund-color: red; font-weight bold; ";
el.className = "parrafo";
el.id = "mi-parrafo";

// Para asignar una propiedad personalizada es necesario lo siguiente
el.setAttribute("mi-propiedad", "mi propiedad");

// Para obtener el valor de un atributo se realiza lo siguiente
el.getAttribute("mi-propiedad"); // Obtener el valor de un atributo
el.hasAttribute("mi-propiedad"); // Pregunta si tiene una propiedad específica

document.body.append(el);
