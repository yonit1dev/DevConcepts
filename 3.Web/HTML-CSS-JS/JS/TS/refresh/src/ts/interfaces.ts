interface Point {
  x: number;
  y: number;
  z?: number;
}

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number;
}

interface Person {
  readonly id: number; // readonly properties
  firstName: string;
  lastName: string;
  nickName?: string;
  sayHi: (name: string) => string;
}

interface Employee {
  readonly company: string;
  email: string;
}

interface Engineer extends Person, Employee {
  level: number;
  specialization: string;
}

const pt: Point = {
  x: 3,
  y: 2,
};

const thomas: Person = {
  id: 354,
  firstName: "Thomas",
  lastName: "Hardy",
  nickName: "Tom",
  sayHi: (name) => {
    return `Hi ${name}`;
  },
};

console.log(thomas.sayHi("user"));

const shoes: Product = {
  name: "Nike Runners",
  price: 99.99,
  applyDiscount(discount) {
    return this.price * discount;
  },
};

console.log(shoes.applyDiscount(0.1));

const softwareEngineer: Engineer = {
  level: 3,
  specialization: "Backend",
  id: 3921,
  firstName: "First",
  lastName: "Engineer",
  sayHi: function (name: string): string {
    return name;
  },
  company: "AAiT",
  email: "soft@aait.edu",
};

softwareEngineer.sayHi(softwareEngineer.firstName);
