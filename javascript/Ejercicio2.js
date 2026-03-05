/**Ejercicio 2, Hoisting
Que devuelve por consola cada uno de los siguientes console.log
*/

//Devuelve undefined
console.log(a);
var a = "hola";

//Como la variable no se ha inicializado antes da un error de Referencia "ReferenceError"
console.log(b);
let b = "hola";

//Como la variable no se ha inicializado antes da un error de Referencia "ReferenceError"
console.log(c);
const c = "hola";

//NO hay problema de referencia y devuelve saludo
sayHi();

function sayHi() {
  console.log("Hola desde sayHi!");
}

function sayBye() {
  console.log("Adios desde sayBye!");
}
//NO hay problema de referencia y devuelve la despedida
sayBye();
