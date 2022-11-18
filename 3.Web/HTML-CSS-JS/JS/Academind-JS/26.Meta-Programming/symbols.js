// Symbols: primitive types

// Creating symbols
const userId = Symbol("userId");
console.log(userId);

const person = {
  //   id: "p1",
  [userId]: "p1",
  name: "Yoni",
  age: 22,
};

person[userId] = "p3";

// Usage of symbols
person.userId = "p2"; // doesn't really actually intefere with the programmed userId.

console.log(person[userId]);
