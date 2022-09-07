// Creating Arrays

const numbers = [1, 2, 3]; // Most common and recommended way of creating arrays.
console.log(numbers);

const otherNumbers = new Array(1, 2, 3, 4, 5); // Since arrays are objects, and are modeled that way, they can be created using their class constructor. This creates a new empty array if no arguments are passed.
console.log(otherNumbers);

const moreNumbers = Array.of(1, 2); // Yet another way of creating arrays. This is really performance lacking than the square bracket notation.
console.log(moreNumbers);

const string = "Hello World";
const anotherWay = Array.from(string); // This method creates an array from an array-like object. In this example it converts the string into an array by extracting individual characters.
console.log(anotherWay);
