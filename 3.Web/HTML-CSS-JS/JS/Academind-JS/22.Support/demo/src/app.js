const button = document.querySelector("button");
const p = document.querySelector("p");

button.addEventListener("click", () => {
  const text = p.textContent;

  navigator.clipboard
    .writeText(text)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
