const fs = require("fs/promises");
const path = require("path");

//Creates a file
try {
  fs.writeFile("README.md", "This is a readme file.");
  console.log("Created file successfully");
} catch (error) {
  console.log(error.message);
}

// Reads a file
try {
  fs.readFile("README.md").then((data) => {
    console.log(data.toString());
  });
} catch (error) {
  console.log(error.message);
}

//Deletes a file
try {
  fs.unlink(path.resolve(__dirname, "README.md"));
  console.log("Successfully deleted");
} catch (error) {
  console.log(error.message);
}
