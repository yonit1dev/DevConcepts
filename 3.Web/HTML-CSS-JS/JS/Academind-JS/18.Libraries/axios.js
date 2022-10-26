const axios = require("axios"); // run in nodejs environment

axios
  .get("https://jsonplaceholder.typicode.com/users")
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

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    title: "This is a new post!",
    content: "This is a post made with axios library",
    userId: Math.floor(Math.random() * 10),
  })
  .then((response) => console.log(response.status));
