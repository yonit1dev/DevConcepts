const btn = document.querySelector("button");
const anotherBtn = document.querySelector("button:last-of-type");
const h2 = document.querySelector("h2");
const scrollable = document.querySelector(".scrollable");
const div = document.querySelector("div");
const ul = document.querySelector("ul");
const liItems = document.querySelectorAll("li");
const dropZone = document.querySelector(".scrollable:last-child");
const dropList = document.querySelector(".scrollable:last-child ul");

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

// Without Event Delegation
// liItems.forEach((liItem) => {
//   liItem.addEventListener("click", (event) => {
//     event.target.classList.toggle("highlight");
//   });
// });

// With Event Delegation
ul.addEventListener("click", (event) => {
  event.target.closest("li").classList.toggle("highlight"); // better approach for event delegation
  // event.target.classList.toggle("highlight"); // event.target actually refers to the item clicked
});

// Drag Events
liItems.forEach((liItem) => {
  liItem.addEventListener("dragstart", function (event) {
    console.log(event);
    event.dataTransfer.setData("text/plain", this.id);
    event.dataTransfer.effectAllowed = "move";
  });
});

dropZone.addEventListener("dragenter", (event) => {
  event.preventDefault();

  dropZone.classList.add("droppable");
});

dropZone.addEventListener("dragover", (event) => {
  event.preventDefault();
});

dropZone.addEventListener("dragleave", (event) => {
  if (event.relatedTarget.closest(".scrollable:last-child") !== dropZone) {
    dropZone.classList.remove("droppable");
  }
});

dropZone.addEventListener("drop", function (event) {
  const li = event.dataTransfer.getData("text/plain");
  if (Array.from(this.children).find((li) => li.id === li)) {
    return;
  }
  dropList.append(ul.children.item(+li[2] - 1));
});
