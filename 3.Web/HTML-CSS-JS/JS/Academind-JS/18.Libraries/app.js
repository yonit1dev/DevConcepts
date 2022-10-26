// var _ = require("lodash"); if run in nodejs, make sure to install lodash using npm or download the script from their website

const customers = ["Max", "Manuel", "Anna"];
const activeCustomers = ["Max", "Manuel"];

console.log(customers - activeCustomers); // doesn't work; outputs NaN

// using the lodash library
console.log(_.difference(customers, activeCustomers));
