// Object - Oriented Design in JavaScript

// Methods
let rabbit = {};
rabbit.speak = function(line){
    console.log(`The rabbit says ${line}.`);
}

rabbit.speak("I'm alive!");

function speak(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers!");

// this bindings properties; this can't be referred when defining a function with a function keyword
function normalize(){
    console.log(this.coords.map(n => n / this.length));
}
normalize.call({coords: [0, 2, 3], length: 5});