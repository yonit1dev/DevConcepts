// Maps and Sets

// Sets
const ids = new Set([1, 2]); // Initialized only using iterables.
console.log(ids);

const obj = { name: "Yoni" };
ids.add(obj);
console.log(ids.has(obj));
console.log(ids);

ids.add(1, 2); // Doesn't have effect since it's a duplicate
ids.delete(1);

for (const entry of ids.values()) {
  console.log(entry);
}

// Maps
const person1 = { name: "Yoni" };
const person2 = { name: "Lenda" };

const personData = new Map([[person1, { age: 21 }]]);

console.log(personData);
console.log(personData.get(person1)); // Returns the value by using the person1 object as a key.

personData.set(person2, { age: 16 });
console.log(personData);

personData.forEach((value, key) => console.log(key, value));

for (const entry of personData.entries()){
    console.log(entry); // Returns a list containing the key-value pairs separated.
}

// Weak Sets
let personOne = {name: 'Yoni'};
const newPersons = new WeakSet(); // Only accepts objects. Useful for object clearing (garbage collection).
newPersons.add(personOne);

console.log(newPersons);

// Weak Map
const personDatas = new WeakMap();
personDatas.set(personOne, {age : 21});

console.log(personDatas);


