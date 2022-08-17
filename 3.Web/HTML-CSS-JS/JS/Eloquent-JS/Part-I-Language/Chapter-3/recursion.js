// Recursions

// A function that calls itself is called a recursive function

function power(base, exponent){
    if (exponent == 0){
        return 1;
    }
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));

function factorial(number){
    if (number == 0 || number == 1){
        return 1;
    }
    return number * factorial(number - 1);
}

console.log(factorial(4));

// Recursion is sometimes inefficient though in JS even if it's elegant.