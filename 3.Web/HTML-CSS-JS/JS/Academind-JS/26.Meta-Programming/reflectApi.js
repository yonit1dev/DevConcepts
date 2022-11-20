// The Reflect API: to control objects.

const course = {
  title: "JS - The Complete Guide",
};

Reflect.setPrototypeOf(course, {
  toString() {
    return this.title;
  },
});

Reflect.set(course, "price", "$10.99");

console.log(course.toString());
console.log(course.price);
console.log(course);
