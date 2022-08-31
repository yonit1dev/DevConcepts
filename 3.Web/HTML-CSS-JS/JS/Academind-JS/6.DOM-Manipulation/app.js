const title = document.getElementById("main-title");
console.dir(title);
console.log(title.textContent);
console.log(title.className); // Empty now

title.className = "title";
console.log(title.className);

// Applying style to nodes
title.style.color = "pink";
title.style.backgroundColor = "black";
title.style.padding = "1.5rem";
title.style.borderRadius = "12px";

const input = document.querySelector("input");
console.log(input.value);

input.value = "Some other input";
console.log(input.value);

const allLis = document.getElementsByTagName("li");

for (const listItem of allLis) {
  console.dir(listItem);
}
