/**¿Qué salida tendrán los siguientes console.log?*/

// Comparaciones con booleanos
console.log(false + false); //Devuleve 0
console.log(false + true); //Devuelve 1
console.log(true + true); //Devuelve 2

// Comparaciones con arrays
console.log([] === []); //Devuelve false
console.log(
  [] + [],
); /**El operador + convierte los arrays a strings.Entonces devuelve -> "" */
console.log([1, 2] + [3, 4]); //En este junta poque se convierte en strings 1,2 y como hay un mas se junta 2 y 3 , 4 -> 1,23,4
console.log([1] + 1); //EN este caso devuelve concatenacion de string 11
console.log([1] - 1); //EN este caso fuerza al [1].toString a restar como numero con el 1-> 0

// Comparaciones con objetos
console.log({} + {}); //DEVUELVE ->[object Object][object Object]
console.log({} === {}); // DEVUELVE false porque son dos objetos diferentes en memoria -> false
console.log([] === {}); //Devuelve false porque son dos  diferentes tipos de objetos(ARRAY,OBJECT)->false

// Comparaciones especiales
console.log(null + 1); //El null se convierte numericamente en 0 , entonces devuelve la suma 0+1 -> 1
console.log(undefined + 1); //EL Undifened se convierte en NanN , entonces las suma de cualquier numero con NaN es ->NaN
console.log(null == 0); //EL null no se convierte en 0 en comprobacion directa, entonces devuelve ->false
console.log(null <= 0); //El null en operador relacional sique se convierte en 0 y como hay un menos igual , entonces se cumple la condicion-> true
console.log(undefined == null); //Esto es una regla es exclusiva de JS , devuelve -> true

// Operaciones con NaN
console.log(NaN + 1); //Como dije anteriormente cualquier operacion con NaN devuelve o es igual -> NaN
console.log(NaN == NaN); //NaN por regla general nuca es igual de si mismo, devuelve ->false
console.log(NaN === NaN); //LO mismo , NaN nunca acaba siendo igual de si mismo en comprobaciones, devuelve -> false
