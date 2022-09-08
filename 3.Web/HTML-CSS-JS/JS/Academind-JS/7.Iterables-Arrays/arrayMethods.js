// Methods available on Arrays

// Adding elements
const hobbies = ["Coding", "Reading", "Cooking"];
hobbies.push("Boxing"); // common way and adds it to the end of the array. Returns the new length of the array
console.log(hobbies);

hobbies.unshift("Watching"); // adds the value to the beginning of the array. Returns the same result as push.
console.log(hobbies);

// Removing elements
const poppedValue = hobbies.pop(); // Removes the last element and returns it.
console.log(poppedValue);
console.log(hobbies);

hobbies.shift(); // Removes the first element of the array.
console.log(hobbies);

hobbies.splice(0, 0, "Pool"); // This inserts the element into the specified index.
console.log(hobbies);

const removedElement = hobbies.splice(0, 1); // Removes the first element. It also returns the removed elements.
console.log(hobbies);
console.log(removedElement);

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
console.log(testResults.slice()); // Returns a new copy of the array. Refer below for more explanation.

const storedResults = testResults.slice();
/* Without the slice methods, this assignment would of just copied the pointer to the array to the new variable, hence making both of them the same array. Using slice creates a new arrray.
 */
testResults.push(5, 10);
console.log(storedResults, testResults);

// Concatinating arrays
const newArray = testResults.concat([1, 2, 3]); // Adds the array and creates a new copy of the array.
console.log(newArray);
