const btn = document.querySelector("button");
const anotherBtn = document.querySelector("button:last-of-type");
const h2 = document.querySelector("h2");
const scrollable = document.getElementById("scrollable");
const div = document.querySelector("div");

const btnClickHandler = () => {
  alert("Clicked");
};
// btn.onclick = btnClickHandler; // Can only be assigned once to an element.

btn.addEventListener("click", (event) => {
  console.log("Clicked Button");
  console.log(event);
}); // A better way to listen to events.

div.addEventListener(
  "click",
  (event) => {
    console.log("Clicked DIV!");
    console.log(event);
  },
  true
);

const anotherBtnClickHandler = (event) => {
  event.stopPropagation(); // Does nothing to the default behavior of the element
  console.log(event);
  event.target.disabled = true;
};

// More types of event
anotherBtn.addEventListener("mouseenter", anotherBtnClickHandler);

// To look at the target property of the event object.
h2.addEventListener("click", anotherBtnClickHandler);

// Scroll events
// window.addEventListener("scroll", (event) => {
//   console.log(event);
// });
