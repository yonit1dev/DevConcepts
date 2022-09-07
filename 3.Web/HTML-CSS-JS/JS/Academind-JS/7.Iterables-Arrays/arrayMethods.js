// Methods available on Arrays

// Adding elements
const hobbies = ['Coding', 'Reading', 'Cooking'];
hobbies.push('Boxing'); // common way and adds it to the end of the array. Returns the new length of the array
console.log(hobbies);

hobbies.unshift('Watching'); // adds the value to the beginning of the array. Returns the same result as push.
console.log(hobbies);

// Removing elements
const poppedValue = hobbies.pop(); // Removes the last element and returns it.
console.log(poppedValue);
console.log(hobbies);

hobbies.shift(); // Removes the first element of the array.
console.log(hobbies);