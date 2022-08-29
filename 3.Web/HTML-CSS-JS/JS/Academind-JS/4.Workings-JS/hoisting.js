// Hoisting

console.log(userName);
var userName = "Admin"; // Doesn't throw an error, just undefined

var personName;
console.log(personName);

console.log(anotherName);
let anotherName = "Person"; // throws uninitialized error.

// To have more control of variable declaration, turn on stric mode.
// "use strict"; - to enable strict mode. 