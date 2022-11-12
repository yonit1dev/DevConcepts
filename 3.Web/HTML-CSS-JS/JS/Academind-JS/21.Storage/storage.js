const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

const User = {
  uid: "firstUser",
};

storeBtn.addEventListener("click", () => {
  localStorage.setItem(Object.keys(User)[0], User.uid);
  sessionStorage.setItem(Object.keys(User)[0], User.uid);
});

retrieveBtn.addEventListener("click", () => {
  const fetchedId = localStorage.getItem(User.uid);
  const sessionfetchedId = sessionStorage.getItem(User.uid);

  if (fetchedId && sessionfetchedId) {
    console.log(`Got the localStorage id - ${fetchedId}`);
    console.log(`Got the sessionStorage id - ${sessionfetchedId}`);
  } else {
    console.log("Coudn't fetch id.");
  }
});
