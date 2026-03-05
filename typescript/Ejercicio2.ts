interface Animal {
  name: string;
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

const bird: Bird = {
  name: "Paloma",
  canEat: true,
  canDrink: true,
  canSleep: true,
  canFly: true,
};

const dog: Dog = {
  name: "Rocky",
  canEat: true,
  canDrink: true,
  canSleep: true,
  race: "Husky",
  age: 5,
};
