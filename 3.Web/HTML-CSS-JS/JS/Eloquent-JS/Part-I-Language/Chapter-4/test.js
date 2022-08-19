obj = {
    hello: 1,
    this: 2
}

for (let rest in obj){
    console.log(obj[rest]);
}