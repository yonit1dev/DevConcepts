// some old way of doing it
function multiply(x, y) {
  y = y || 1;
  return x * y;
}

console.log(multiply(3, 4));

function add(x, y = 0) {
  return x + y;
}

console.log(add(3, 4));
