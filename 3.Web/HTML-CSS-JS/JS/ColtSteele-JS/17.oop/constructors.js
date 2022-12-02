// Object - Oriented Programming in JS

// Constructor functions
function Car(make, model, year, spec = undefined) {
  this.make = make;
  this.model = model;
  this.year = year;

  if (spec) {
    this.info = {
      motor: spec.motor,
      hp: spec.hp,
      acc: spec.acc,
      topSpeed: spec.topSpeed,
    };
  }
}

Car.prototype.show = function () {
  return `This is the new ${this.year} ${this.make} - ${this.model}.`;
};

Car.prototype.spec = function () {
  return `Motor: ${this.info.motor}\nHorsepower: ${this.info.hp}\nAcceleration: ${this.info.acc}\nTop Speed: ${this.info.topSpeed}`;
};

const tucson = new Car("Hyundai", "Tucson", 2020, {
  motor: "Mercedes V4",
  hp: 130,
  acc: "0 - 100 in 6.7sec",
  topSpeed: "240km/hr",
});
console.log(tucson.make);
console.log(tucson.show());
console.log(tucson.spec());

const vitara = new Car("Suzuki", "Vitara", 2022);
console.log(vitara.show());

console.log(tucson.show === vitara.show);
