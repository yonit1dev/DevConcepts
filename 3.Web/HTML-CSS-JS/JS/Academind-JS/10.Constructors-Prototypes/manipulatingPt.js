// Manipulating Prototypes

const course = {
  title: "JS - Complete Guide",
  rating: 5,
};

Object.setPrototypeOf(course, {
  printRating() {
    console.log(
      `The rating for the ${this.title} course is ${this.rating} / 5 stars.`
    );
  },
});

course.printRating();

console.log(Object.getPrototypeOf(course));
console.dir(course);

const student = Object.create(
  {
    printProgress() {
      console.log(this.progress);
    },
  },
  {
    progress: {
      configurable: true,
      enumerable: false,
      value: "100%",
      writable: false,
    },
  }
);

student.printProgress();

for (const key of Object.keys(student)) {
  console.log(key); // Doesn't enumurate since it's set to false.
}
