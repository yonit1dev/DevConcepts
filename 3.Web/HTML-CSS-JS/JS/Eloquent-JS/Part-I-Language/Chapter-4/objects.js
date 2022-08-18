// Objects in JS

let day1 = {
    squirrel: false,
    events: ["work", "pizza", "running", "touched tree"]
};

console.log(day1.squirrel);
console.log(Object.keys(day1));

let day2 = {};
Object.assign(day2, day1);
console.log(day2);

// Journal of Jacques
let journal = [
    {
        events: ["work", "touched tree", "pizza", "running", "television"],
        squirrel: false,
    },
    {
        events: ["work", "icecream", "pizza", "lasagna", "cauliflower", "touched tree"],
        squirrel: false,
    },
    {
        events: ["weekend", "cycling", "break", "peanuts"],
        squirrel: true,
    }
];

console.log(journal);