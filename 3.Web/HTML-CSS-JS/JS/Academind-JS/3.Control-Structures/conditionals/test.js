// Test file to try out code for the module

const person1 = { name: "Max" };
const person2 = { name: "Max" };

console.log(person1 === person2); // False

const arrays = ["Sports", "Cooking"];
const moreArrays = ["Sports", "Cooking"];

console.log(arrays === moreArrays); // False

const admin = { name: "Max", age: 30, isAdmin: true };

if ((admin.name === "Max" && admin.age === 30) || admin.isAdmin) {
  console.log("Test Passed!");
} else {
  console.log("Test Failed!");
}

const lists = [];
const zero = 0;

if (lists) {
  // Empty lists also yield true
  console.log("True");
}

if (zero) {
  console.log("Not Zero");
} else {
  console.log("Is Zero");
}
