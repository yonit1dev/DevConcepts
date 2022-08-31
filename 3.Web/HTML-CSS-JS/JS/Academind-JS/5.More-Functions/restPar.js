// Rest parameters in JS

/* 
    Rest Parameters must be the last in order in function declarations.
    There can also be one rest parameter in a function.
*/

function sumUp(...numbers) {
  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };
  let sum = 0;

  for (let num of numbers) {
    sum += +validateNumber(num);
  }

  return sum;
}

let sum = sumUp(1, 2);
console.log(sum);

// Another way of rest operator declaration. This was before ES6 / JS 2015.
function subtractUp() {
  let difference = 0;

  for (let num of arguments) {
    difference -= +num;
  }

  return difference;
}

let difference = subtractUp(1, 2);
console.log(difference);
