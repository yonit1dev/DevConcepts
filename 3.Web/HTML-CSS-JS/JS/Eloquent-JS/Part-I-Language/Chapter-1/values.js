// All about the atomic parts of the JS language.

// Numbers - represented in 64 bits in JS.

console.log(5)
console.log(5.5)
console.log(0 / 0) // Produces NaN - not a number.

// Strings - represent texts. Represented using the unicode format.

console.log(`half of 100 is ${100 / 2}.`) // Use backticks in strings to incorporate a computation.

// Unary Operators
console.log(typeof(4.5)) // Number - float
console.log(typeof('string')) // String
console.log(typeof(true)) // Boolean

// Boolean values
console.log(3 > 2)
console.log(3 == 3)
console.log(5 > 10)

// Empty values - null and undefined
console.log(0 != null)

// Short-Circuiting of Logical operators
console.log(null || 'user') // Return user - right-hand side, due to null not being able to be converted to a boolean.
console.log('user' || 'or') // Returns user


