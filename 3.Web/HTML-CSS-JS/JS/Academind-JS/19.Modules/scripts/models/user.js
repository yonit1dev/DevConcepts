class User {
  constructor(fName, lNAme, age) {
    this._id = Math.floor(Math.random() * 10);
    this._firstName = fName;
    this._lastName = lNAme;
    this._age = age;

    this._fullName =
      this.firstName.toUpperCase() + " " + this.lastName.toUpperCase();
  }

  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    this._firstName = value;
  }
  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    this._lastName = value;
  }
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }
  get fullName() {
    return this._fullName;
  }
}

export default User;
