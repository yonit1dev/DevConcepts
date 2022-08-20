// Flatenning and Summarizing Functions

function reduce(array, combine, start){
    let current = start;

    for(let element of array){
        current = combine(current, element);
    }

    return current;
}

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));

console.log([1].concat(2));