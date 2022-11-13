/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
const button = document.querySelector("button");
const p = document.querySelector("p");
button.addEventListener("click", () => {
  const text = p.textContent;

  // Feature detection and fallback code
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(result => {
      console.log(result);
    }).catch(error => {
      console.log(error);
    });
  } else {
    alert("Feature no supported in your browser!");
  }
});
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU1BLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsUUFBUSxDQUFDO0FBQy9DLE1BQU1DLENBQUMsR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0FBRXJDRixNQUFNLENBQUNJLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNO0VBQ3JDLE1BQU1DLElBQUksR0FBR0YsQ0FBQyxDQUFDRyxXQUFXOztFQUUxQjtFQUNBLElBQUlDLFNBQVMsQ0FBQ0MsU0FBUyxFQUFFO0lBQ3ZCRCxTQUFTLENBQUNDLFNBQVMsQ0FDaEJDLFNBQVMsQ0FBQ0osSUFBSSxDQUFDLENBQ2ZLLElBQUksQ0FBRUMsTUFBTSxJQUFLO01BQ2hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUNERyxLQUFLLENBQUVDLEtBQUssSUFBSztNQUNoQkgsT0FBTyxDQUFDQyxHQUFHLENBQUNFLEtBQUssQ0FBQztJQUNwQixDQUFDLENBQUM7RUFDTixDQUFDLE1BQU07SUFDTEMsS0FBSyxDQUFDLHVDQUF1QyxDQUFDO0VBQ2hEO0FBQ0YsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icm93c2VyLXN1cHBvcnQvLi9zcmMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJidXR0b25cIik7XG5jb25zdCBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInBcIik7XG5cbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBjb25zdCB0ZXh0ID0gcC50ZXh0Q29udGVudDtcblxuICAvLyBGZWF0dXJlIGRldGVjdGlvbiBhbmQgZmFsbGJhY2sgY29kZVxuICBpZiAobmF2aWdhdG9yLmNsaXBib2FyZCkge1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmRcbiAgICAgIC53cml0ZVRleHQodGV4dClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFsZXJ0KFwiRmVhdHVyZSBubyBzdXBwb3J0ZWQgaW4geW91ciBicm93c2VyIVwiKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOlsiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyb3IiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=