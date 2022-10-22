const xhr = new XMLHttpRequest();
const listElement = document.querySelector(".posts");
const postTemplate = document.querySelector("template");

// Data Transfer
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts"); // configuring the request
xhr.responseType = "json";

xhr.addEventListener("load", function () {
  const fetchedPosts = xhr.response.slice(0, 15);
  console.log(fetchedPosts);

  // Rendering Posts
  for (const post of fetchedPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;

    listElement.append(postEl);
  }
});

xhr.send();
