import { readFile, writeFile } from "fs";

readFile("./dist/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err.message);
    return;
  }

  const first = result;

  writeFile("./dist/output.txt", `Here is the result: ${first}`, (err) => {
    if (err) {
      console.log(err.message);
      return;
    }
  });
});
