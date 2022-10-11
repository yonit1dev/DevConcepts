// Pure Function
function add(a, b) {
  return a + b;
}

console.log(add(1, 5)); // Always 6

// Not a pure function
function addRandom(a) {
  return a + Math.random() * 10;
}

console.log(addRandom(5)); // Result differs everytime

let previousResult = 0;

function addMoreNums(a, b) {
  const sum = a + b;
  previousResult = sum;
  return sum;
}

addMoreNums(4, 8); // not a pure function
console.log(previousResult);

const hobbies = ["GYM", "Coding"];

function printHobbies(hobbies) {
  hobbies.push("Sports");
  console.log(hobbies);
}

printHobbies(hobbies); // also has a side-effect

// Factory function
function taxCalculator(tax) {
  function calculateTax(amount) {
    return amount * tax;
  }

  return calculateTax;
}

const vatAmount = taxCalculator(0.15);
const incomeAmount = taxCalculator(0.3);

console.log(vatAmount(100), incomeAmount(330));

