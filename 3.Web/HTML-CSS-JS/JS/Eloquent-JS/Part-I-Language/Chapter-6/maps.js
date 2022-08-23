// Maps 

let ages = {
    Boris: 39,
    Liang: 22,
    Julia: 62,
};

console.log(`Julia is ${ages["Julia"]} years old.`);
console.log("Is Jack's age known?", "Jack" in ages);
console.log("Is to String's age known?", "toString" in ages);

let age = new Map();
age.set("Boris", 39);
age.set("Liang", 22);
age.set("Julia", 62);

console.log(`Julia is ${age.get("Julia")} years old.`);
console.log("Is Jack's age known?", age.has("Jack"));
console.log(age.has("toString"));