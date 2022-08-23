// Getters, Setter and Statics

class Temperature{
    constructor(celsuis){
        this.celsius = celsuis;
    }

    get fahrenheit(){
        return ((this.celsius * 1.8 )+ 32);
    }

    set fahrenheit(value){
        this.celsius = (value - 32) / 1.8;
    }

    static fromFahrenheit(value){
        return new Temperature((value - 32) / 1.8);
    }
}

let temp = new Temperature(22);
console.log(temp.fahrenheit);

temp.fahrenheit = 86;
console.log(temp.celsius);

let temp1 = Temperature.fromFahrenheit(100);
