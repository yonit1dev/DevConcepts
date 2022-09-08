// Assignment on Iterables-Arrays

// Create an array of numbers and perform operations on it.

let arrayNumbers = [6, -8, 4, 50, 9, -2, 7, 1, 3];

const numbersGreaterFive = arrayNumbers.filter((number) => number > 5);
console.log(numbersGreaterFive);

const mappedNumbers = arrayNumbers.map((number) => ({ age: number }));
console.log(mappedNumbers);

const product = arrayNumbers.reduce(
  (prevValue, currValue) => prevValue * currValue,
  1
);
console.log(product);

// Write a function "findMax" that finds the largest number in a list of arguments.

const findMax = (...nums) => {
  let max = 0;
  for (let num of nums) {
    if (num >= max) {
      max = num;
    }
  }
  return max;
};

console.log(findMax(...arrayNumbers));

// Tweak the findMax function so that it returns the minumum and maximum in an array. Use array destructuring to store the results in separate constants

const modFindMax = (...nums) => {
  let min = nums[0];
  let max = nums[0];

  for (let num of nums) {
    if (num >= max) {
      max = num;
    }

    if (num <= min) {
      min = num;
    }
  }

  return [min, max];
};

const [min, max] = modFindMax(...arrayNumbers);

console.log(min, max);

// Create a list with no duplicate values
const newList = new Set([2, 3]);
newList.add(1);
console.log(newList);

newList.add(1);
console.log(newList);
