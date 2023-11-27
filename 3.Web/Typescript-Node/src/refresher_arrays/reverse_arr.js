function reverseArray(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const values = [];

  for (i = arr.length - 1; i >= 0; i--) {
    values.push(arr[i]);
  }

  return values;
}

function reverseArrayInPlace(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const arrLength = arr.length;
  const lastIndex = arrLength - 1;
  let breakPoint = 0;

  if (arrLength % 2 == 0) {
    breakPoint = arrLength / 2 - 1;
  } else {
    breakPoint = arrLength / 2;
  }

  for (i = 0; i <= breakPoint; i++) {
    arr[i] = arr[lastIndex - i];
  }

  return arr;
}

const myArray = [1, 2, 3, 4];

const firstResult = reverseArray(myArray);
const secondResult = reverseArrayInPlace(myArray); // modifies the array in place

console.log(`
First Result: ${firstResult}

Original Array: ${myArray}
Second Result: ${secondResult}`);
