// Asynchronous Code

const button = document.querySelector("button");
const output = document.querySelector("p");

const getPos = () => {
  const promise = new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (success) => {
        resolve(success);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
};

const setTimer = (duration) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, duration);
  });
  return promise;
};

function trackUserHandler() {
  let positionData;
  getPos()
    .then((posData) => {
      positionData = posData;
      return setTimer();
    })
    .catch((err) => {
      console.log(err);
    })
    .then((data) => {
      console.log(data, positionData);
    });
  setTimer(1000).then(() => {
    console.log("timer done!");
  });

  console.log("Getting location..."); // this executes first before the fetch of location, since the latter is handed off to the browser for execution.
}

button.addEventListener("click", trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result); // the result is logged first, even if the button is clicked before calculation.
