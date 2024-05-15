/**
 * PRINCIPIOS  DE LA PROGRAMACIÓN ORIENTADA A OBJETOS (POO)
 * - Encapsulación
 *       Agrupar métodos y propiedades que tenga sentido agrupar
 * - Abstracción
 *      Permite esconder los detalles del objeto, es decir, que permite al momento de usar el objeto saber que va a hacer, sin importarnos el como
 * - Herencia
 *      Permitir que un objeto pueda pasar métodos a otros objetos, por ejemplo, si el objeto A tiene un método de "guardar" este se le puede pasar al objeto B
 * - Polimorfismo
 *      Significa que si yo tengo muchos objetos y requiero guardarlos en un base de datos, sin importar si su forma es distinta pueda usarlo así su implementación sea diferente
 */

/**
 * **************************************************************************************************************************************************************************************
 * ENCAPSULACIÓN
 * **************************************************************************************************************************************************************************************
 */

// const user = {
//   nombre: "Cristian",
//   apellido: "Corrales",
//   getNombreCompleto() {
//     return [this.nombre, this.apellido].join(" ");
//   },
// };

// console.log(user.getNombreCompleto());

/**
 * Significa que yo puedo hacer uso de las propiedades o métodos que se encuentran dentro del mismo objeto a través de la variable del mismo usuario
 * **************************************************************************************************************************************************************************************
 */

/**
 * **************************************************************************************************************************************************************************************
 * ABSTRACCIÓN
 * **************************************************************************************************************************************************************************************
 */

// const user = new User();
// user.password = "Chanchito feliz";
// user.save();

/**
 * En este ejemplo, solo con leer el código, sin escribir ningún comentario, sabemos que está pasando con él
 * **************************************************************************************************************************************************************************************
 */

/**
 * **************************************************************************************************************************************************************************************
 * HERENCIA
 * **************************************************************************************************************************************************************************************
 */

// Este ejemplo se explicó con ilustraciones en el vídeo

/**
 *
 * **************************************************************************************************************************************************************************************
 */

/**
 * **************************************************************************************************************************************************************************************
 * POLIMORFISMO
 * **************************************************************************************************************************************************************************************
 */
// Haciendo uso del ejemplo de despachos de restaurante
// User
// Restaurante
// Motociclista

function validaEntidad(entidad) {
  // ...
  entidad.save();
}

/**
 * Con el polimorfimos no sería necesario hacer uso del switch para validar cada uno de los casos
 * Es decir, esto se representa de la siguiente manera, implementaríamos un método que se llame SAVE y este se podría implementar en cada uno de los objetos y
 * si el usuario viene desde un servicio de autenticación podríamos implementarlo y aplicarlo al objeto user
 * **************************************************************************************************************************************************************************************
 */
