const title = document.getElementById("main-title");
const section = document.querySelector("section");

const ul = document.querySelector("ul");
const liFirst = ul.firstElementChild;
const liSecond = ul.children[1];
const liThird = document.querySelector("li:last-of-type");

const button = document.querySelector("button");

const input = document.querySelector("input");

console.dir(title);
console.log(title.textContent);
console.log(title.className); // Empty now

title.className = "title";
console.log(title.className); // Populated with 'title' now

// Applying style to nodes
// title.style.color = "pink";
// title.style.backgroundColor = "black";
// title.style.padding = "1.5rem";
// title.style.borderRadius = "12px";

console.log(input.value);
input.value = "Some other input";
console.log(input.value);

console.log(liFirst.textContent); // the first list item
console.log(liSecond.textContent); // the second list item

console.log(liFirst.parentNode); // Returns the ul tag
console.log(liFirst.closest("body")); // Returns the closest ancestor with the matching css selector
console.log(liThird.previousElementSibling.textContent);

section.className = "black-bg";

button.addEventListener("click", () => {
  section.classList.toggle("invisible");
});

// section.innerHTML = "<h2>This is the replaced title.</h2>";
ul.innerHTML += '<li class="list-item">Item 4</li>'; // performance intensive since everything is rerendered.
ul.insertAdjacentHTML("beforeend", '<li class="list-item">Item 5</li>'); // doesn't render every inner element.

// Reusable way of creating interactable DOM elements
const newLi = document.createElement('li');
newLi.textContent = 'Item 6';
ul.appendChild(newLi);

const insertLi = document.createElement('li');
insertLi.textContent = 'Item middle';
ul.lastElementChild.before (insertLi);

ul.firstElementChild.replaceWith(insertLi);
