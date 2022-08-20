// Iterator interface

let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());

class Matrix{
    constructor(row, col, element = (x, y) => undefined){
        this.row = row;
        this.col = col;

        this.content = [];

        for(let y =  0; y < col; y++){
            for (let x = 0; x < row; x++){
                this.content[y * row + x] = element(x, y);
            }
        }
    }

    get(x, y){
        return this.content[y * this.row + x];
    }
    set(x, y, value){
        this.content[y * this.row + x] = value;
    }
}