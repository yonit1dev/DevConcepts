/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLXN1cHBvcnQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5jb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBcIik7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gcC50ZXh0Q29udGVudDtcblxuICBuYXZpZ2F0b3IuY2xpcGJvYXJkXG4gICAgLndyaXRlVGV4dCh0ZXh0KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==