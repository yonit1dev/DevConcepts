const title = document.getElementById("main-title");
console.log(title.textContent);

title.textContent = "Changed Header!";
console.log(title.textContent);

console.dir(title);

const listItems = document.getElementsByClassName("list-item"); // Old way

for (let list of listItems) {
  console.log(list.textContent);
}

console.dir(listItems);

const query = document.querySelectorAll(".list-item"); // Modern way

console.dir(query);

const displayBtn = document.getElementById("display-btn");
const secondTitle = document.getElementById("second-title");

displayBtn.addEventListener("click", () => {
  secondTitle.style.display = "block";
  secondTitle.textContent = "Button Clicked";
});
