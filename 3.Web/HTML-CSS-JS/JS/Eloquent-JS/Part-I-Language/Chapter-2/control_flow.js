// Conditional Statements

let theNumber = Number("hello");

if(!Number.isNaN(theNumber)){
    console.log("It's a number.");
} else {
    console.log("It's not a number.")
}

let num = 123;

if (num < 10){
    console.log("Small");
} else if (num < 100) {
    console.log("Medium");
} else {
    console.log("Large");
}

// Loops

// Printing even numbers
let number = 0;

while (number <= 10){
    console.log(number);
    number += 2;
}

// Power operation
let result = 1;
let counter = 0;

while (counter < 10){
    result *= 2;
    counter += 1;
}

console.log(result);
console.log(counter);

// for loops
for (let number = 0; number < 12; number += 2)
{
    console.log(number);
}

// breaking out of loops
for (let current = 20; ; current += 1)
{
    if (current % 7 == 0)
    {
        console.log(current);
        break; // quits the loop
    }
}