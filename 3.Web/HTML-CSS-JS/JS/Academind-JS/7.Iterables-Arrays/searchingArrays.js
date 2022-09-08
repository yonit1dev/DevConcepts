// Finding elements and index of elements through arrays.

// Retrieving indexes
const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2]);

console.log(testResults.indexOf(1.5)); // Returns the index of the first matching value. Works well with primitive values.

const personData = [{ name: "Max" }, { name: "Manuel" }];
console.log(personData.indexOf({ name: "Max" })); // Doesn't work for reference values.

// Find and findIndex
const manuel = personData.find((person, index, persons) => {
  return person.name === "Manuel";
}); // Returns the object with the specified test condition.

manuel.name = "Anna"; // find doesn't create a new object. Just returns the old one

console.log(manuel);

const maxIndex = personData.findIndex((person, index, persons) => {
  return person.name === "Max";
});
console.log(maxIndex);

// Alternative to the for of loop, the forEach loop
const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const adjustedPrice = [];

// for(const price of prices){
//     adjustedPrice.push(price * (1 + tax));
// }

prices.forEach((price, index, prisces) => {
  adjustedPrice.push(price * (1 + tax));
  const priceObj = { index: index, taxAdjPrice: price * (1 + tax) };
  console.log(priceObj);
});

console.log(adjustedPrice);
