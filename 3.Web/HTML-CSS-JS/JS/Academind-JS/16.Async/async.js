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

async function trackUserHandler() {
  // The next two lines, where async and await keywords are used just transform the code below them(then-catch block)

  try {
    const posData = await getPos();
    const timerData = await setTimer(1500);

    console.log(timerData, posData);
  } catch (error) {
    console.log(error);
  }

  //   let positionData;
  //   getPos()
  //     .then((posData) => {
  //       positionData = posData;
  //       return setTimer(1500);
  //     })
  //     .then((data) => {
  //       console.log(data, positionData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   setTimer(1000).then(() => {
  //     console.log("timer done!");
  //   });

  //   console.log("Getting location..."); // this executes first before the fetch of location, since the latter is handed off to the browser for execution.
}

button.addEventListener("click", trackUserHandler);

// let result = 0;
// for (let i = 0; i < 100000000; i++) {
//   result += i;
// }

// console.log(result); // the result is logged first, even if the button is clicked before calculation.
