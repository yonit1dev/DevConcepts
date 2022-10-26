const axios = require("axios"); // run in nodejs environment

axios
  .get("http://jsonplaceholder.typicode.com/users")
  .then((res) => {
    const usernames = [];
    for (const user of res.data) {
      usernames.push(user.name);
    }
    return usernames;
  })
  .then((usernames) => console.log(usernames))
  .catch((error) => console.log(error))
  .finally(console.log("Finished API Request!"));
