let el = document.createElement("p");
el.innerText = "Elemento creado";

// El método de append puede recibir texto y también nodos
document.body.append(el);

// Método para remover el elemento
el.remove();

// Método para agregar el elemento al inicio del documento
document.body.prepend(el);

// Nota: las acciones a un elemento son únicas, si se usa append y prepend el tomará la última acción

// Métodos y formas de reemplazar elementos
let div = document.createElement("div");
div.innerText = "Soy un texto";

el.replaceWith(div);

// Otra forma de reemplazar elementos es usando su nodo padre
document.body.replaceChild(el, div); //El primer argumento es el elemento con el que voty a reemplazar y el segundo el elemento que se va a reemplazar
document.body.removeChild(el); // Elimina los elementos partiendo de su nodo padre
document.body.appendChild(el); //Este método crea elementos al final de un nodo padre. No permite texto, solo nodos

// Métodos para insertar un elemento al lado de otra etiqueta y no arriba ni abajo
// document.body.insertBefore(div, el);

document.body.insertAdjacentElement("beforebegin", div); // lo inserta antes de abrir la etiqueta
document.body.insertAdjacentElement("afterbegin", div); // lo inserta al comienzo pero después de la etiqueta
document.body.insertAdjacentElement("beforeend", div); // Lo inserta antes de la etiqueta al final
document.body.insertAdjacentElement("afterend", div); // lo inserta después de la etiqueta de cierre

// Tambien se encuentran métodos que permiten con las mismas condiciones anteriores insertar solo HTML o Text para cada caso
document.body.insertAdjacentHTML();
document.body.insertAdjacentText();
