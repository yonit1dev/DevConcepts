// Labeling loops

// Can be used for more control over structures.
outerForLoop: for (let j = 0; j < 5; j++) {
  for (let i = 0; i < 5; i++) {
    console.log("I : ", i);
    if (j === 2 && i === 3) break outerForLoop;
  }
  console.log("J : ", j);
}
