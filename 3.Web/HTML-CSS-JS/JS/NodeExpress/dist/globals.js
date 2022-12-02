// Available global variables

const fileGlobal = __filename;
const directory = __dirname;
const environment = process.env;

console.log(fileGlobal); // current file name
console.log(directory); // directory path
console.log(environment.pid);
console.log(environment.USER); // the process id
