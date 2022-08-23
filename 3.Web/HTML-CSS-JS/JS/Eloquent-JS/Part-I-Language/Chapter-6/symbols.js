// Symbols : multiple interfaces use the same property name for different things. They're placeholders for property names.
// They're useful, because they let multiple interfaces with same names to coexist!

let sym = Symbol("name");
console.log(sym === Symbol("name")); // Every symbol is unique.

class Rabbit{
    
    constructor(type){
        this.type = type;
    }

    speak(line){
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}

let blackRabbit = new Rabbit("black");
Rabbit.prototype[sym] = 55;
console.log(blackRabbit[sym]);

const toStringSymbol = Symbol("toString"); // Creating an interface with the same name as the the default inherent toString method.
Array.prototype[toStringSymbol] = function (){
    return `${this.length} cm of blue yarn!`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());
