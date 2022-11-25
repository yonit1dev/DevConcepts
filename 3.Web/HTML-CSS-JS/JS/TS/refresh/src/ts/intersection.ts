type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

// intersection of two types
type ColoredCircle = Circle & Color;

const yellowCirlce: ColoredCircle = {
  radius: 4,
  color: "Yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

// intersection of two types extended with additional properties
type CatDog = Cat &
  Dog & {
    age: number;
  };

const newCatDog: CatDog = {
  numLives: 9,
  breed: "German Shepherd",
  age: 7,
};
