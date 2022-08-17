// Functions in JS

// Function that takes one parameter as input and returns it's square.
const square = function(x){
    return x * x;
}

console.log(square(5));

// Function with no input parameter
const makeNoise = function(){
    console.log("Ping!");
}

makeNoise();

// Power function
const power = function(base, exponent){
    let result = 1;

    for (let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
}

console.log(power(2, 3));

// Better way to declare functions
function future(){
    return "You'll never have flying cars!";
}

console.log(future());

// Using the an arrow for function declaration

const cube = (x) => {return x * x * x;};

console.log(cube(3));

// Closure
function wrapValue(n){
    let local = n;
    return () => local; // Function returned
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);

console.log(wrap1())
console.log(wrap2())