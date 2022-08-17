// Exercises on Chapter - 2

// Looping a triangle

for (let row = 0; row < 7; row++)
{
    let hash = "#";
    
    for (let col = 1; col <= row; col++)
    {
        hash += "#"
    }
    
    console.log(hash);
}

// FizzBuzz

for (let number = 1; number <= 100; number++)
{
    if (number >= 3 && number % 3 == 0 && number % 5 != 0)
    {
        console.log("Fizz");
    }
    else if (number >= 5 && number % 3 != 0 && number % 5 == 0)
    {
        console.log("Buzz");
    }
    else if (number >= 5 && number % 3 == 0 && number % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else
    {
        console.log(number);
    }
}

// Chessboard

let size = 8;
let grid = ""

for (let pos = 0; pos < size; pos++)
{
    
}

console.log(grid);