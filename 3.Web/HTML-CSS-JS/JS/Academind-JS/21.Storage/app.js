const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const User = {
  uid: "firstUser",
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem(Object.keys(User)[0], User.uid);
});

retrieveBtn.addEventListener("click", () => {
  const fetchedId = localStorage.getItem(User.uid);

  if (fetchedId) {
    console.log(`Got the id - ${fetchedId}`);
  } else {
    console.log("Coudn't fetch id.");
  }
});
