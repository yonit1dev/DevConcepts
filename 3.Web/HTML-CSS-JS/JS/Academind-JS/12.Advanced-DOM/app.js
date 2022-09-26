// SpecialDOM Properties

// Datasets
const li = document.querySelector("li:first-of-type");

li.dataset.extraInfo = "Added from script.";
console.log(li.dataset);

// Element Dimensions
const li2 = document.querySelector("li:last-of-type");

console.log(li2.getBoundingClientRect());
console.log(li2.offsetLeft); // top left corner
console.log(li2.clientLeft); // left side without borders, margin...

console.log(window.innerWidth);

// Positioning a tool tip on list items
// Be wary of scrolling heights and widths
const li2PosLeft = li2.offsetLeft;
console.log(li2PosLeft);
const li2PosTop = li2.offsetTop;
console.log(li2PosTop);
const li2Height = li2.clientHeight;

const moreInfo = document.createElement("div");
moreInfo.style.display = "none";
moreInfo.innerHTML = `
    <p style="margin: 0; color: blue;">
        This is more info about the list element clicked.
    </p>`;

li2.addEventListener("click", function () {
  const xPos = li2PosLeft + 10;
  console.log(xPos);
  const yPos = li2PosTop + li2Height; // Scroll height would of been deducted.
  console.log(yPos);

  moreInfo.style.position = "absolute";
  moreInfo.style.left = xPos + "px";
  moreInfo.style.top = `${yPos}px`;

  moreInfo.style.display = "block";
  this.append(moreInfo);
});

// Handling Scrolling
li2.scrollTo({ top: 50, behavior: "smooth" });

// Templates - Separating HTML code from script files
li.addEventListener("click", () => {
  const tempTxt = "Template Text";

  const temp = document.getElementById("template");
  const tempBody = document.importNode(temp.content, true);
  tempBody.querySelector("p").textContent = tempTxt;

  temp.append(tempBody);
  temp.style.display = "block";
});

// Date Object
console.log(new Date().getDay());
console.log(new Date("07/11/2019"));

// Error Object
// throw new Error("This is an error");
const newError = new Error("Server disconneted");
newError.code = 404;
throw newError;
