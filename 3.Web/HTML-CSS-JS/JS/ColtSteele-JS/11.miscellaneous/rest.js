// Old way was the arguments keyword
/*
 * Limitations:
 * Arguments is not a real array. It's an array like object.
 * It isn't available on arrow / anonymous functions.
 * It always includes the whole list of arguments passed.
 */
function sumNums() {
  const nums = [...arguments];
  let sum = 0;
  for (let num of nums) {
    sum += +num;
  }

  return sum;
}

console.log(sumNums(1, 2, 3));

// Rest operator - collects the remaining arguments and is a real array.
function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}
const numArray = [10, 100, 1000];

console.log(sumAll(...numArray, 1, 2, 3, 4, 5));

function fullName(first, last, ...titles) {
  console.log(`
    First Name: ${first},
    Last Name: ${last},
    Other Info: ${titles}
`);
}

fullName("Yonathan", "Tessema", "Anosie");

const multiply = (...nums) => nums.reduce((total, currVal) => total * currVal);

console.log(multiply(2, 4, 5));
