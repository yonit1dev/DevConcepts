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

// Closures
let username = "Yoni";

function greetUser() {
  //   let name = username;
  let firstName = "Anna"; // preceeds the outer firstName variable declaration
  console.log("Hi " + firstName);
}

let firstName = "Maximilian";

username = "Max";

greetUser();

// Recursion
function powerOf(x, n) {
  return n <= 1 ? x : x * powerOf(x, n - 1);
}

// Loop Variant
function powerOfLoop(x, n) {
  let result = 1;

  while (n > 0) {
    result *= x;
    n--;
  }

  return result;
}

console.log(powerOf(0, 0));
console.log(powerOfLoop(5, 5));

// Advanced Recursion
const myself = {
  name: "Yoni",
  friends: [
    {
      name: "Max",
      friends: [{ name: "Chris" }],
    },
    {
      name: "Julia",
    },
  ],
};

function friendNames(person) {
  const friendsName = [];

  if (!person.friends) {
    return [];
  }

  for (const friend of person.friends) {
    friendsName.push(friend.name);
    friendsName.push(...friendNames(friend));
  }

  return friendsName;
}

console.log(friendNames(myself));
