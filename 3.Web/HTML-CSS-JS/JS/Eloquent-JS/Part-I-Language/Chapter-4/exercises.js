// Exercises on Chapter 4

// The Sum of a Range

function range(start, end, step = 1){
    numbers = [];

    let first = start;
    let last = end;

    if (start > end){
        first = end;
        last = start;
    }

    for(let i = first; i <= last; i+= step){
        numbers.push(i);
    }

    return numbers;
}
console.log(range(1, 10, 2));

function sum(numbers){
    sum = 0;

    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }

    return sum;
}

console.log(sum(range(1, 10)));

// Reversing an array

function reverseArray(array){
    let reversedArray = [];
    let length = array.length;

    for(let i = 0; i < length; i++){
        reversedArray[i] = array[(length - 1) - i];
    }

    return reversedArray;
}

console.log(reverseArray([1, 2, 3]));

function reverseArrayInPlace(array){
    let length = array.length;

    for (let i = 0; i < length / 2; i++){
        let left = array[i];
        let right = array[length - 1 - i];

        array[i] = right;
        array[length - 1 - i] = left;
    }

    return array;
}

console.log(reverseArrayInPlace([3, 2, 1, 0]))

// A List

