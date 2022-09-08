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
