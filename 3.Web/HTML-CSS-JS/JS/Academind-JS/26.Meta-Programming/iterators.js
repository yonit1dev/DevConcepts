// Iterators

// Custom iterator imperatively
const company = {
  currEmployee: 0,
  employees: ["Max", "Manu", "Anna"],
  next() {
    if (this.currEmployee >= this.employees.length) {
      return { value: this.currEmployee, done: true };
    }
    const nextVal = { value: this.employees[this.currEmployee], done: false };
    this.currEmployee++;
    return nextVal;
  },
};

let iteratedEmp = company.next();

while (!iteratedEmp.done) {
  console.log(iteratedEmp.value);
  iteratedEmp = company.next();
}

console.log("Run out of values! Quit while loop.");
