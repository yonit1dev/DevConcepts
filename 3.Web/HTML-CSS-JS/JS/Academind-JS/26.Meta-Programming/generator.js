// Generator: generates objects with a next method.

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
  [Symbol.iterator]: function* employeeGenerator() {
    let iteratedEmp = company.next();

    while (!iteratedEmp.done) {
      yield iteratedEmp.value;
      iteratedEmp = company.next();
    }
  },
};
