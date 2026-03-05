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
  race: string;
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
  race: "Labrador",
  age: 5,
};
