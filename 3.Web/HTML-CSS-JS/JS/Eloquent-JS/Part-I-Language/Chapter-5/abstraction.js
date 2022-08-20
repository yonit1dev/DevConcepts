// Hiding lower details of implementation - abstraction.

let prints = console.log;
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action(i);
    }
}

repeat(3, prints);

let labels = [];
repeat(5, i => {
    labels.push(`Unit ${i + 1}`);
});

console.log(labels);