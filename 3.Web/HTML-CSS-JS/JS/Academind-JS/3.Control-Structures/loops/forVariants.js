// Variants of the for loop

// for-of loop
const basicArray = [1, 2, 3, 4, 5];

for (let element of basicArray) {
  // loops over the elements of the array
  console.log(element);
}

// for-in loop
const anotherArray = [6, 7, 8, 9, 10];

for (let element in anotherArray) {
  // loops for the lenght of the array
  console.log(element);
}

// On Objects
const basicObject = {
  name: "Hello",
  place: "World!",
};

for (let element in basicObject) {
  // the for-of loop doesn't work. The for-in loop loops over the keys of the object.
  console.log(basicObject[element]);
}
