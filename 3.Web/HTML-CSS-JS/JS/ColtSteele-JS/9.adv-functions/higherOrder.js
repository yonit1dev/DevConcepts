function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function product(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

const operations = [add, subtract, product, divide];

for (let func of operations) {
  console.log(func(10, 10));
}

const thing = {
  doSomething: product,
};

console.log(thing.doSomething(10, 5));
