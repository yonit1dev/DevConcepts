// Asynchronous Code

const button = document.querySelector("button");
const output = document.querySelector("p");

function trackUserHandler() {
  navigator.geolocation.getCurrentPosition(
    (posData) => {
      setTimeout(() => {
        console.log(posData);
      }, 2000);
    },
    (error) => {
      console.log(error);
    }
  );
  setTimeout(() => {
    console.log("Timer Done!");
  }, 0);
  
  console.log("Getting location..."); // this executes first before the fetch of location, since the latter is handed off to the browser for execution.
}

button.addEventListener("click", trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result); // the result is logged first, even if the button is clicked before calculation.
