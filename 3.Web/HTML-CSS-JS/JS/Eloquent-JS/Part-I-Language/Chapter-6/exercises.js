// Exercises on Chapter 6

// A Vector Type

class Vec{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    plus(vector){
        return new Vec(this.x + vector.x, this.y + vector.y);
    }

    minus(vector){
        return new Vec(this.x - vector.x, this.y - vector.y);
    }

    get length(){
        return (Math.sqrt((this.x ** 2) + (this.y ** 2)));
    }
}

let vec = new Vec(3, 4);
let secondVec = new Vec(-3, -4);

console.log(vec.x);
console.log(vec.y);
console.log(vec.plus(secondVec));
console.log(vec.minus(secondVec));
console.log(vec.length);
console.log(secondVec.length);

// Groups
class Group{
    constructor(){
        this.content = [];
    }

    add(value){
        if(this.content.length == 0){
            this.content.push(value);
        }
        else{
            for(let val in this.content){
                console.log(val === value);
                if(value === val){
                    break;
                }
                else{
                    this.content.push(value);
                }
            }
        }
    }
    
    delete(value){
        if(value in this.content){
            this.content[indexOf(value)].pop;
        }
    }

    has(value){
        return value in this.content;
    }
}

let grp = new Group();
console.log(grp);
grp.add(5);
console.log(grp);
grp.add(5);
console.log(grp);