// Primitive vs Reference values.

// Primitive variables house or store the value itself.
let numberOne = 1;
let numberTwo = numberOne;
console.log(numberOne);
console.log(numberTwo);

numberOne = 5;
console.log(numberOne);
console.log(numberTwo);

// Reference variables store a reference to the memory location.

let oneObject = {name: 'Yoni'};
let anotherObj = oneObject;
console.log(oneObject, anotherObj);

oneObject.age = 21;
console.log(oneObject, anotherObj);

oneObject.name = 'Max';
console.log(oneObject, anotherObj);

let hobbies = ['Programming', 'Exercise'];
let newHobbies = hobbies;
console.log(hobbies, newHobbies);

hobbies.push('Reading');
console.log(hobbies, newHobbies);

// One solution is the spread operator

let otherHobbies = [...hobbies];
console.log(hobbies, otherHobbies);

hobbies.push('Hobby');
console.log(hobbies, otherHobbies);

