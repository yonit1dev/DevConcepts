const btn = document.querySelector("button");

btn.get;
// setTimeout(() => {
//   btn.style.transform = "translateX(100px)";
//   setTimeout(() => {
//     btn.style.transform = "translateX(200px)";
//     setTimeout(() => {
//       btn.style.transform = "translateX(300px)";
//     }, 1000);
//   }, 1000);
// }, 1000);

const moveX = function (el, amount, delay, onSuccess, failure) {
  setTimeout(() => {
    el.style.transform = `translateX(${amount}px)`;
    if (onSuccess) onSuccess;

    // some failure code
    if (el.getBoundingClientRect().right > 200) failure();
  }, delay);
};

moveX(
  btn,
  100,
  1000,
  () => {
    moveX(btn, 300, 1000);
  },
  () => {
    alert("Can't move on");
  }
);

// Promises
const willBuyPresent = new Promise((resolve, reject) => {
  const randomNum = +(Math.random() * 10).toFixed(0);

  if (randomNum < 5) {
    resolve();
  } else {
    reject();
  }
});

willBuyPresent
  .then(() => {
    console.log("Got a present");
  })
  .catch(() => {
    console.log("No present");
  });

// Request
const fakeRequest = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const rand = Math.random();

      if (rand < 0.3) {
        reject({
          status: 404,
        });
      } else {
        resolve({
          status: 200,
        });
      }
    }, 3000);
  });
};

fakeRequest()
  .then((response) => {
    console.log(`Request Worked.\n Status code: ${response.status}.`);
  })
  .catch((response) => {
    console.log(`Request Failed.\nStatus code: ${response.status}.`);
  });
