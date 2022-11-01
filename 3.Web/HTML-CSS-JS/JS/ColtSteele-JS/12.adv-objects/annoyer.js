const annoyer = {
  phrases: ["literally", "k", "cray cray", "OMG", "YOLO"],
  printedPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);

    console.log(this.phrases[index]);
  },

  // without the arrow function the execution of printedPhrase in setInterval wouldn't of worked since this would be bound to global window object
  startPrint() {
    this.id = setInterval(() => {
      this.printedPhrase();
    }, 1500);

    // another way
    // const anotherID = setInterval(this.printedPhrase.bind(this), 1500);
  },

  stopPrint() {
    clearInterval(this.id);
  },
};

annoyer.startPrint();
