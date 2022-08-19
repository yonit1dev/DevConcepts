// Prototypes in JS

let empty = {};
console.log(Object.getPrototypeOf({}));
console.log(Object.getPrototypeOf(Array.prototype));

// Use Object.create to create an object with a specific prototype
let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";

killerRabbit.speak("Hello, I kill all rabbits!");