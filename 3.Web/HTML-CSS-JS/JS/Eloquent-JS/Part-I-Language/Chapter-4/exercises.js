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

function arrayToList([...array]){

    let list = {};
    let length = array.length;

    if (length < 1){
        return null;
    }
    
    list.value = array[0];
    list.rest = arrayToList(array.slice(1));

    return list;
}

let test = arrayToList([4, 5, 6, 7]);
console.log(test);

function prepend(element, {...list}){
    let values = listToArray(list);

    values.unshift(element);

    list = arrayToList(values);
    console.log(list);

    return list;
}

console.log(prepend(3, test));

function listToArray({...list}, array = []){
    
    array.push(list.value);

    return (list.rest != null) ? listToArray(list.rest, array) : array;
}

console.log(listToArray(test));

// Deep Comparison

function deepEqual(valueA, valueB){

    if((typeof(valueA) == "object" && valueB != null) && (typeof(valueB) == "object" && valueA != null)){

        let keyA = Object.keys(valueA);
        let keyB = Object.keys(valueB);

        if (keyA.length != keyB.length){
            return false;
        }
        else{
            let result;

            for (let i = 0; i < keyA.length; i++){
                if(keyA[i] != keyB[i]){
                    return false;
                }
                else{
                    result = deepEqual(valueA[keyA[i]], valueB[keyB[i]]);
                    if (!result) break;
                }
            }

            return result;
        }

    }
    else{
        let result = (valueA === valueB);
        return result;
    }
    
}
let objA = {value : 1};
let objB = {values : 1};
let objC = {value : 1};
console.log(deepEqual(false, 0)); // false
console.log(deepEqual(objA, objB)); // false
console.log(deepEqual(objA, objC)); // true
