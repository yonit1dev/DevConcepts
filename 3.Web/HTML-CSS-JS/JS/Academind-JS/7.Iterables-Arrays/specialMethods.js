// Special Useful Methods

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;
const adjustedPrice = [];

const taxAdjPrices = prices.map((price, index, prices) => {
  const priceObj = { index: index, adjPrice: price * (1 + tax) };
  return priceObj;
}); // Map has to have a return value

console.log(taxAdjPrices);

// Sorting
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return 1;
  } else if (a === b) {
    return 0;
  } else {
    return -1;
  }
});
console.log(sortedPrices);

// Filtering
const filteredArray = prices.filter((value) => (value >= 6 ? 1 : 0));

console.log(filteredArray);

// The reduce method
const sum = prices.reduce((prevValue, curValue) => {
  return prevValue + curValue;
}, 0);

console.log(sum);

// Split method
const data = "new york;10.99;2000";

let transformedData = data
  .split(";")
  .map((value) => (isNaN(+value) ? value : +value));
/*
 * Splitting the string using the semi-colon matching character and converting numbers to their type using map method.
 */

console.log(transformedData);

// Join method
const nameFragements = ["Yonathan", "Tessema"];
const name = nameFragements.join(" ");
/*
 * Joins the elements of an array into one string using the separator character specified as arguments. It transforms everything into string.
 */

console.log(name);
