const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

// Open / create a new database
const request = indexedDB.open("Shop");
let db;

request.onsuccess = function (event) {
  db = event.target.result;
};

request.onupgradeneeded = function (event) {
  db = event.target.result;

  const objStore = db.createObjectStore("users", {
    keyPath: "uid",
  });

  objStore.transaction.oncomplete = function (event) {
    const userStore = db.transaction("users", "readwrite").objectStore("users");

    userStore.add({
      uid: "firstUser1",
      firstName: "Yonathan",
      lastName: "Tessema",
      age: 22,
    });
  };
};

request.onerror = function (event) {
  console.log("Error!");
};

storeBtn.addEventListener("click", () => {
  if (!db) {
    return;
  }

  const userStore = db.transaction("users", "readwrite").objectStore("users");

  userStore.add({
    uid: "secondUser2",
    firstName: "Second",
    lastName: "User",
    age: 30,
  });
});

retrieveBtn.addEventListener("click", () => {
  const userStore = db.transaction("users", "readwrite").objectStore("users");

  const request = userStore.get("secondUser2");
  request.onsuccess = function () {
    console.log(request.result);
  };
});
