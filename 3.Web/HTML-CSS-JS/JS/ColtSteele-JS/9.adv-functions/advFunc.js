// Functions as arguments
function callMultiple(func, times = 1) {
  for (let i = 0; i < times; i++) {
    func();
  }
}

function hello() {
  console.log("Hello, World!");
}

function bye() {
  console.log("Bye, World!");
}

callMultiple(hello, 3);

function randomCall(f1, f2) {
  const pick = Math.random() * 10;

  if (pick < 5) {
    f1();
  } else {
    f2();
  }
}

randomCall(hello, bye);

// Functions as return values
function makeBetweenFunc(min, max) {
  return function (val) {
    return val >= min && val <= max;
  };
}

const inAgeRange = makeBetweenFunc(18, 99);
console.log(inAgeRange(17)); // returns false
console.log(inAgeRange(22)); // returns true

function multiplyBy(num) {
  return (val) => val * num;
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(2));
console.log(triple(2));
