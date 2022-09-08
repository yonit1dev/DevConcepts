// The Spread Operator

const prices = [1, 2, 3];

console.log(...prices); // Extracts each element of an array. Usually used to copy elements.

const copiedPrices = [...prices];
const otherPrices = prices;
prices.push(4);

console.log(copiedPrices); // Entire new array
console.log(prices);
console.log(otherPrices); // Same array

console.log(Math.min(...prices)); // Useful in this usecase.

const persons = [
  { name: "Max", age: 30 },
  { name: "Yonathan", age: 21 },
];
const copiedPersons = [...persons];
persons.push({ name: "Anna", age: 25 }); // This has no effect.
persons[0].name = "Manuel"; // This does have an effect is since it's a reference.

console.log(copiedPersons);

// Array Destructuring
const nameFragements = ["Yonathan", "Tessema"];
const [firstName, lastName] = nameFragements;
console.log(firstName, lastName);
