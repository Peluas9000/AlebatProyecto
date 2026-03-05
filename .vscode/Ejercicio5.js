/*Ejercicio 5, maps
Sigue los siguientes pasos:

Añade los siguientes key-valor al map
Clave	Valor
moroso	user (object)
agarrado	user (object)
generoso	user2 (object)
funcion	findAnimal (function)
color	color (string)
Muestra por consola todo el map
Muestra por consola el key moroso
Comprueba si existe la key hola
Muestra por consola el tamaño total del map
Recorre el map con un forEach
Elimina el elemento agarrado del map
Limpia el mapa por completo*/

// Creamos algunos objetos y función para usar como valores
const user = { nombre: "Pedro", apellido: "Sánchez" };
const user2 = { nombre: "Ana", apellido: "García" };
function findAnimal() {
  console.log("Buscando animal...");
}

// Crear el map
const myMap = new Map();

// Añadir elementos
myMap.set("moroso", user);
myMap.set("agarrado", user);
myMap.set("generoso", user2);
myMap.set("funcion", findAnimal);
myMap.set("color", "azul");

//  Mostrar todo el map
console.log(myMap);

//  Mostrar valor de la key "moroso"
console.log(myMap.get("moroso"));

//  Comprobar si existe la key "hola"
console.log(myMap.has("hola"));

//  Mostrar tamaño total del map
console.log(myMap.size); // 5

//  Recorrer el map con forEach
myMap.forEach((valor, clave) => {
  console.log(`Clave: ${clave}, Valor:`, valor);
});

//  Eliminar el elemento "agarrado"
myMap.delete("agarrado");
console.log(myMap);

// Limpiar el mapa completo
myMap.clear();
console.log(myMap);
