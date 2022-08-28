// How to handle errors out of programming scope and throw custom error messages.

// Way to accept input from node terminal

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getMaxLifeValues() {
  rl.question("Enter the max-life: ", (enteredLife) => {
    const parsedValue = parseInt(enteredLife);

    if (isNaN(parsedValue) || parsedValue <= 0) {
      rl.close();
      throw { message: "This is invalid input or less than zero!" };
    }

    console.log(parsedValue);

    rl.close();
  });
}

try {
  getMaxLifeValues();
} catch (error) {
  console.log(error);
  console.log("an error");
}
