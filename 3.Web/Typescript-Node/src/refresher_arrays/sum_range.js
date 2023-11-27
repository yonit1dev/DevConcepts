function populate(start, end, step = 1) {
  const values = [];

  if (step < 0) {
    for (i = start; i >= end; i += step) {
      values.push(i);
    }

    return values;
  } else {
    for (i = start; i <= end; i += step) {
      values.push(i);
    }

    return values;
  }
}

function sumArrays(arr) {
  sum = 0;

  for (i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArrays(populate(5, 2, -1)));
