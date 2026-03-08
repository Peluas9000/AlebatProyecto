interface Animal {
  nombre: string;
  canEat: boolean;
  canDrink: boolean;
  canSleep: boolean;
}
interface Bird extends Animal {
  canFly: boolean;
}

interface Dog extends Animal {
  race: "Husky" | "Labrador" | "Chucho";
  age: number;
}

type ColorHexadecimal = [number, number, number];

interface Cat extends Animal {
  color: string | ColorHexadecimal;
}

interface Snake extends Animal {}

//Instancia de objetos
const bird: Bird = {
  nombre: "Paloma",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  nombre: "Rocky",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "Husky",
  age: 5,
};

const snake: Snake = {
  nombre: "PIton",
  canSleep: true,
  canDrink: true,
  canEat: false,
};

const negrito: Cat = {
  nombre: "negrito",
  canDrink: true,
  canEat: true,
  canSleep: true,
  color: [123, 123, 123],
};

//FUNCTIONS
//EJEMPLO QUE EL COLOR NO SEA SOLO STRING SINO HEXADECIMAL
function getColorHexadecimal(color: string | ColorHexadecimal): string {
  if (typeof color === "string") {
    return color;
  } else {
    const [r, g, b] = color;
    return `rgb(${r}, ${g}, ${b})`;
  }
}

console.log(getColorHexadecimal("negro")); // Output: "negro"           
console.log(getColorHexadecimal([255, 0, 0])); // Output: "rgb(255, 0, 0)"