// Naming functions and other stuff.

// Writing a function that prints out the number of cows and chickens on farm in three digit format.

function addingZeros(number, digitLength){
    number = String(number);

    while(number.length < digitLength){
        number = "0" + number;
    }

    return number;
}

function printFarmInventory(cows, chickens, pigs){
    console.log(`${addingZeros(cows, 3)} Cows.`);
    console.log(`${addingZeros(chickens, 3)} Chickens.`);
    console.log(`${addingZeros(pigs, 3)} Pigs.`);
}

printFarmInventory(33, 65, 90);