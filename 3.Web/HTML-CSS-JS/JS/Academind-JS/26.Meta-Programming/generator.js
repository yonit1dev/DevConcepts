// Generator: generates objects with a next method. It builds an iterator object. It's a special type of function that generates an iterable object with the next method.

const company = {
  currEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  // next() {
  //   if (this.currEmployee >= this.employees.length) {
  //     return { value: this.currEmployee, done: true };
  //   }
  //   const nextVal = { value: this.employees[this.currEmployee], done: false };
  //   this.currEmployee++;
  //   return nextVal;
  // },
  // For using native js looping methods, since js looks for an iterator symbol when looping mechanisms are called on an iterable object.
  [Symbol.iterator]: function* employeeGenerator() {
    let currEmp = 0;

    while (currEmp < this.employees.length) {
      yield this.employees[currEmp];
      currEmp++;
    }
    // Using the next function

    // let nextEmp = company.next();

    // while (!nextEmp.done) {
    //   yield nextEmp.value;
    //   nextEmp = company.next();
    // }
  },
};

for (let employee of company) {
  console.log(employee);
}

// Spread operator also looks for the iterator symbol.
console.log([...company]);
