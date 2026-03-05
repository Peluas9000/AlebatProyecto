/*Ejercicio 4, refactoriza el código
Dado los siguientes códigos, refactorízalos como consideres, si consideras que está bien, explica el motivo.

Primer código
Tenemos una función que saca el nombre completo del usuario con el nombre y apellido
*/

// Usuario definido como const porque no vamos a reasignarlo
const usuario = {
  nombre: "Pedro",
  apellido: "Sánchez",
  edad: 45,
  profesion: "Barro man",
};

// Usamos arrow function, desestructuración y template literals
const nombreUsuario = ({ nombre, apellido }) =>
  `Me llamo ${nombre} ${apellido}`;

console.log(nombreUsuario);

/*
Segundo código
Tenemos una función que calcula el salario anual y el nombre del usuario
*/

const user = {
  name: "Pedro",
  last: "Sánchez",
  age: 45,
  salary: 1000,
  profesion: "Barro man",
};

//En esta funcion sera importante cambiar de const la variables a let ya que se deben modificar
function userData(user) {
  let annualSalary = user.salary * 12;
  let fullName = `${user.name} ${user.last}`;

  return `Me llamo ${fullName} y cobro ${annualSalary}€ al año`;
}

console.log(userData(user));

/*
Tercer código
Si el usuario tiene 30 años y no es español, recibirá una ayuda del gobierno de 2000€*/
//Cambiamos el nombre del const user a -> user2 porque no puede haber dos variables de tipos const que esten nombrado iguales
const user2 = {
  name: "Álvaro",
  last: "Morón",
  age: 30,
  nationality: "Morocco",
};

//Y en esta funcion no hace falta hacer if anidado , con solo un "&&" bastaria en el primer if con las dos condiciones
function esExtrangero(user) {
  if (user2.nationality != "España" && user2.age == "30") {
    return "Apto para la ayuda del gobierno";
  } else {
    return "No es apto para la ayuda del gobierno";
  }
}

console.log(esExtrangero(user));
