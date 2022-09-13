// More on objects

// Creating an object
const person = {
  nickName: "Yoni",
  "Last Name": "Tesse",
  age: 22,
  hobbies: ["Programming", "Working out"],
  greet: () => {
    alert(`Hi there, ${this.nickName}`);
  },
};

person.age = 21; // Reassgining a property
person.isAdmin = true; // Assigning new properties to created object.

delete person.hobbies; // Deletes the property

const nick = "nickName";

console.log(person[nick]);

console.log(person["Last Name"]); // Use the square bracket notation on keys if theys are strings.
console.log(person["age"]); // Square brackets can be used on key names by parsing to strings.
// person.greet();
console.log(person);
