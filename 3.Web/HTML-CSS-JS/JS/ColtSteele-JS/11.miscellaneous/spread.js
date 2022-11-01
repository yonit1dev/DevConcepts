// Spread operator
const array = [1, 2, 3];

const newArray = [...array];
console.log(newArray);

const canine = { family: "Caninae", furry: true };
const dog = { ...canine, isPet: true };

console.log(dog);

function addManyNumbers(...nums) {
  let sum = 0;
  for (let num of nums) {
    sum += +num;
  }

  return sum;
}

console.log(addManyNumbers(1, 2));

const nums = [45, 23, 34, 7, 5];
console.log(Math.max(...nums));
