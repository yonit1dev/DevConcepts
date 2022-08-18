// Jacques actual journal

let journal = [];

function addEntry(events, squirrel){
    journal.push({events, squirrel})
}

addEntry(["work", "touched tree", "pizza", "running", "television"], false);
addEntry(["work", "icecream", "pizza", "lasagna", "cauliflower", "touched tree"], false);
addEntry(["weekend", "cycling", "break", "peanuts"], true);