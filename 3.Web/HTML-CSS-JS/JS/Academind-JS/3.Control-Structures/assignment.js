// Assignment on control structures

// Question - 1
const randomNumber = Math.random();

if (randomNumber > 0.7) console.log(`ALERT : ${randomNumber}!!!`);

// Question - 2
const arrayNumbers = [1, 3, 5, 7, 9];

for (let e of arrayNumbers) {
  console.log(e);
}

for (let e in arrayNumbers) {
  console.log(arrayNumbers[e]);
}

// Question - 3
let length = arrayNumbers.length - 1;
for (let e in arrayNumbers) {
  console.log(arrayNumbers[length - e]);
}

// Question - 4
const anotherRandomNumber = Math.random();

console.log(randomNumber);
console.log(anotherRandomNumber);

(randomNumber > 0.7 && anotherRandomNumber > 0.7) ||
randomNumber <= 0.2 ||
anotherRandomNumber <= 0.2
  ? console.log("ALERT!!!")
  : console.log("Nothing");
