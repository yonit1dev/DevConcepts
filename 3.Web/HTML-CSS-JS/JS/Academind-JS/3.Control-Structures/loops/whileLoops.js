// While Loops - runs as long as a condition is true

// While Loop
let i = 5;

while (i >= 0) {
  console.log(i);

  i--;
}

let thisArray = [0, 1, 5, 4];
let j = thisArray.length;

while (j) {
  // Won't print 0
  console.log(thisArray[j]);

  j -= 1;
}

// Do While Loop
let k = 0;

do {
  console.log(k);
  k += 1;
} while (k < 0);

while (k < 0) {
  console.log(k);
  k += 1;
}
