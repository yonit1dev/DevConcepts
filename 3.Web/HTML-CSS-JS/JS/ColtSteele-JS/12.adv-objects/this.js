// this keyword

console.log(this); // this is referring to the global window object.

const obj = {
  name: "Yonathan",
  print() {
    console.log(this);
  },
};
obj.print(); // this is referring to the object.

const person = {
  first: "Yonathan",
  last: "Tessema",
  nickName: "Yoni",
  fullName() {
    return `${this.first} ${this.last} AKA ${this.nickName}`;
  },
  printBio() {
    const fullName = this.fullName();
    console.log(`${fullName} is a person!`);
  },
};

person.printBio(); // works as intended

const printBio = person.printBio;
try {
  printBio(); // this is reassigned to the environment, which in this case is the global window object. Throws an error
} catch (error) {
  console.log(`Error: ${error.message}`); // TypeError
}
