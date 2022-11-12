const storeBtn = document.getElementById("store-btn");
const retrieveBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  const firstName = "Yoni";
  const userPref = ["#productivity", "#desk-setups"];
  const userSettings = {
    darkMode: true,
    navBar: "bottom",
    searchBar: "top",
  };

  document.cookie = `firstName=${firstName}; max-age=5`; // expires after 5 seconds
  document.cookie = `pref=${userPref};`;
  document.cookie = `settings=${JSON.stringify(userSettings)}`;
});

retrieveBtn.addEventListener("click", () => {
  let cookieData = document.cookie.split(";");

  cookieData = cookieData.map((data) => {
    return data.trim();
  });

  console.log(cookieData);
});
