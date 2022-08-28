// Basic for loop

// Finite for loop
for (let i = 0; i < 6; i++) {
  console.log(i);

  if (i === 5) break;
}

// Infinite for loop
for (let j = 0; ; j++) {
  console.log(j);

  if (j === 4) break;
}

// On an array
const thisArray = ["The", "Hello", "World", "Program!"];

for (let k = 0; k < thisArray.length; k++) {
  console.log(thisArray[k]);
}

// On an object
const thisObj = {
  name: "This Object",
  place: "forLoops.js",
  size: 30,
};

for (let i = 0; i < Object.keys(thisObj).length; i++) {
  console.log(i + 1);
}
