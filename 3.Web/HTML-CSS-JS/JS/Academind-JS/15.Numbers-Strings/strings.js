// Template Literals / Tagged
const number = 10;

console.log(`My number is ${number}.`);

function prodDescription(strings, prodName, prodPrice) {
  console.log(strings, prodName, prodPrice);
  return "This is a product.";
}

const prodOutput = prodDescription`This product (${"MacBook Pro"}) is ${parseFloat(
  1299.99
)}`;

console.log(prodOutput);

// Regular Expressions
const email = "test@test.com";

console.log(email.includes("@"));

const regex = /^\S+@\S+\.\S+$/;
console.log(regex.test(email));
