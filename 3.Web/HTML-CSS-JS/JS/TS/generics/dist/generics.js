"use strict";
const input = document.querySelector("#username");
console.log(input.value);
input.value = "From TS";
console.log(input.value);
function booleanIdentity(item) {
    return item;
}
function myIdentity(item) {
    return item;
}
myIdentity(7);
function getRandomElement(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
const myArray = [4, 5, 6];
console.log(getRandomElement(myArray));
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const newObj = merge({ name: "Object" }, { length: 30 });
console.log(newObj);
function makeEmptyList() {
    return [];
}
const arrays = makeEmptyList();
arrays.push("hello");
class Playlist {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlist();
const videos = new Playlist();
