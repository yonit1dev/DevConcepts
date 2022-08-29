const messageInput = document.getElementById("click-message-input");
const addListenerBtn = document.getElementById("add-listener-btn");
const clickableBtn = document.getElementById("clickable-btn");

function printMessage() {
  const value = messageInput.value;
  console.log(value || "Clicked me!");
}
function addListener() {
  clickableBtn.addEventListener("click", printMessage);
}

addListenerBtn.addEventListener("click", addListener);
