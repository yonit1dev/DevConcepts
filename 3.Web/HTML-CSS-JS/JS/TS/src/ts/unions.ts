function printAge(age: number | string): void {
  console.log(`You are ${age} years old.`);
}

// works for both of the below scenarios
printAge(23);
printAge("23");

// ts complains if the parameters are strucutred as this.
// use type narrowing
function calcTax(price: number | string, tax: number) {
  return price * tax;
}
