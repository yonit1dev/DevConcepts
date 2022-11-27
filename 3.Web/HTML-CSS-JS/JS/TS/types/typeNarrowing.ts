interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

// type predicate function
function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog): string {
  if (isCat(animal)) {
    return "Meow!!!";
  }
  return "Woof";
}

// discriminated unions
interface Rooster {
  kind: "rooster";
  name: string;
  weight: number;
  age: number;
}

interface Cow {
  kind: "cow";
  name: string;
  weight: number;
  age: number;
}

interface Pig {
  kind: "pig";
  name: string;
  weight: number;
  age: number;
}

interface Sheep {
  kind: "sheep";
  name: string;
  weight: number;
  age: number;
}

type FarmAnimal = Pig | Cow | Rooster | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink";
    case "cow":
      return "Mooooo";
    case "rooster":
      return "Cockadoooodle";
    case "sheep":
      return "Baaaaaa";
    default:
      const neverHere: never = animal;
  }
}
const newCow: Cow = {
  kind: "cow",
  name: "Moo",
  weight: 123,
  age: 4,
};

console.log(getFarmAnimalSound(newCow));
