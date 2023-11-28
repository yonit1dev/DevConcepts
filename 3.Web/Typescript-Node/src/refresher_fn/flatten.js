function flatten(arr, finalArr) {
  // break-point for recursion
  if (typeof arr != "object") {
    finalArr.push(arr);
    return finalArr;
  }

  // iterate over each element
  for (let el of arr) {
    if (typeof el == "object") {
      helper(el, finalArr);
    } else {
      finalArr.push(el);
    }
  }

  return finalArr;
}

let arr = [1, 2, [3, 4], 5, [6, [7, 8]]];
console.log(helper(arr, []));
