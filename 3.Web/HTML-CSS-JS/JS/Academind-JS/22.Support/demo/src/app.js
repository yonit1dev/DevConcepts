const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", () => {
  const text = p.textContent;

  // Feature detection and fallback code
  if (navigator.clipboard) {
    navigator.clipboard
      .writeText(text)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    alert("Feature no supported in your browser!");
  }
});
