// Exercises on Chapter 3

// Minimum
function minimum(a, b){
    if (a <= b){
        return a;
    }
    return b;
}

console.log(minimum(-1, 5));

// Recursion
function isEven(x){
    if (x < 0){
        return "Only positive numbers!";
    }
    else if (x == 0){
        return true;
    }
    else if (x == 1){
        return false;
    }
    else{
        return isEven(x - 2);
    }
}

console.log(isEven(-1));

// Bean Counting
function countBs(string){
    let count = countChar(string, "C");

    return count;
    
}

function countChar(string, char){
    string = String(string);
    let counter = 0;

    for (let pos = 0; pos < string.length; pos++){
        if(string[pos] === char){
            counter += 1;
        }
    }
    
    return counter;
}

console.log(countBs("BatgSBW"));