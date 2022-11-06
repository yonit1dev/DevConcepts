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
  get firstName() {
    return this._firstName;
  }
  get lastName() {
    return this._lastName;
  }
  get fullName() {
    return this._fullName;
  }
  get age() {
    return this._age;
  }
}

export default User;
