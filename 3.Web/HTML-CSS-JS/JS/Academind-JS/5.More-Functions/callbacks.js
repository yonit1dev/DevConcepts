// Callback functions in JS

/* 
    Function that are called for the programmer by another anonymous actor.
    Especially used in event flow and asynchronous programming 
*/

function sumUp(resultCB, ...numbers) {
  const validateNumber = (num) => {
    return isNaN(num) ? 0 : num;
  };

  let sum = 0;

  for (const num of numbers) {
    sum += validateNumber(num);
  }

  resultCB(sum);
}

sumUp(
  (num) => {
    console.log(num);
  },
  1,
  2,
  3,
  4,
  10
);
