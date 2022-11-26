console.log("Hello");

const btn = document.getElementById("btn");
btn?.addEventListener("click", () => {
  console.log("Clicked Button");
});
const section = document.getElementById("section");
const todoInput = document.getElementById("todo-input") as HTMLInputElement;

function printElements(element: HTMLElement | null): void {
  console.log(element);
}

printElements(btn);
printElements(section);

// builtin array method types
const array: number[] = [1, 2, 3, 4];
array.map((arrayElement) => {
  console.log(arrayElement);
});

const product = array.reduce((prevVal, currVal) => {
  return prevVal * currVal;
}, 1);

console.log(product);

const myString = "Hello";
// myString.replaceAll("l", "!"); // throws an error can be fixed by including the es2021 lib in the lib property of the tsconfig files

let mystery: unknown = "Hello World";
const lengthofWord = (mystery as string).length;

console.log(lengthofWord);

const form = document.getElementById("todo-form") as HTMLFormElement;
console.log(form);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Submitted");
});
