"use strict";
console.log("Hello");
const btn = document.getElementById("btn");
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
    console.log("Clicked Button");
});
const section = document.getElementById("section");
const todoInput = document.getElementById("todo-input");
function printElements(element) {
    console.log(element);
}
printElements(btn);
printElements(section);
// builtin array method types
const array = [1, 2, 3, 4];
array.map((arrayElement) => {
    console.log(arrayElement);
});
const product = array.reduce((prevVal, currVal) => {
    return prevVal * currVal;
}, 1);
console.log(product);
const myString = "Hello";
// myString.replaceAll("l", "!"); // throws an error can be fixed by including the es2021 lib in the lib property of the tsconfig files
let mystery = "Hello World";
const lengthofWord = mystery.length;
console.log(lengthofWord);
const form = document.getElementById("todo-form");
console.log(form);
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submitted");
});
