const btn = document.querySelector("button");
const anotherBtn = document.querySelector("button:last-of-type");
const h2 = document.querySelector("h2");
const scrollable = document.getElementById("scrollable");

const btnClickHandler = () => {
  alert("Clicked");
};
// btn.onclick = btnClickHandler; // Can only be assigned once to an element.

btn.addEventListener("click", btnClickHandler); // A better way to listen to events.

setTimeout(() => {
  btn.removeEventListener("click", btnClickHandler);
}, 3000);

const anotherBtnClickHandler = (event) => {
  console.log(event);
  event.target.disabled = true;
};

anotherBtn.addEventListener("mouseenter", anotherBtnClickHandler);
h2.addEventListener("click", anotherBtnClickHandler); // To look at the target property of the event object.

// Scroll events
window.addEventListener("scroll", (event) => {
  console.log(event);
});
