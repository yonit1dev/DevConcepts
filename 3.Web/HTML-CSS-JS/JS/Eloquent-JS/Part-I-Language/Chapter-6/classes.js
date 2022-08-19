// Classes in JS

let protoRabbit = {
    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

function makeRabbit(type){
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;

    return rabbit;
}

let killerRabbit = makeRabbit("killer");
killerRabbit.speak("I'm a killer.");

// Easier way
function Rabbits(type){
    this.type = type;
}

Rabbits.prototype.speak = function(line){
    console.log(`The ${this.type} rabbit says '${line}'`);
}

let weirdRabbit = new Rabbits("weird");
weirdRabbit.speak("I'm the weird rabbit.")

// Classes definiton
class Rabbit{
    
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let blackRabbit = new Rabbit("black");
blackRabbit.speak("I'm the black one!");