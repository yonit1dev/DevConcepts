class LinkedList {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function arrToList(arr) {
  if (arr.length == 1) {
    return new LinkedList(arr[0]);
  }

  return new LinkedList(arr[0], arrToList(arr.slice(1)));
}

function listToArr(values, ls) {
  if (ls.next == null) {
    values.push(ls.value);
    return values;
  }

  values.push(ls.value);
  return listToArr(values, ls.next);
}

const arr = [1, 2, 3];
const ls = arrToList(arr);

console.log("List: ", ls);

const backToArr = listToArr([], ls);

console.log("Array: ", backToArr);
