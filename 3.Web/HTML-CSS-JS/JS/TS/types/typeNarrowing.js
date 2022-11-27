"use strict";
// type predicate function
function isCat(animal) {
    return animal.numLives !== undefined;
}
function makeNoise(animal) {
    if (isCat(animal)) {
        return "Meow!!!";
    }
    return "Woof";
}
function getFarmAnimalSound(animal) {
    switch (animal.kind) {
        case "pig":
            return "Oink";
        case "cow":
            return "Mooooo";
        case "rooster":
            return "Cockadoooodle";
    }
}
const newCow = {
    kind: "cow",
    name: "Moo",
    weight: 123,
    age: 4,
};
console.log(getFarmAnimalSound(newCow));
