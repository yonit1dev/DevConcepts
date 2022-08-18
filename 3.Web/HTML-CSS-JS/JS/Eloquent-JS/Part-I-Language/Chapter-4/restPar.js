// Rest Parameters

// Functions that accepts a number of arguments
// ... operator used to spread out an array

function max(...numbers){
    let result = -Infinity;

    for(let number of numbers){
        if (number > result){
            result = number;
        }
    }
    return result;
}

console.log(max(5, 3 ,4, 200))