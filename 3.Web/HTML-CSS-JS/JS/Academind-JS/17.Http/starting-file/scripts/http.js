const listElement = document.querySelector(".posts");
const postTemplate = document.querySelector("template");
const form = document.querySelector("form");
const postTitle = document.getElementById("title");
const postContent = document.getElementById("content");
const addPostBtn = document.querySelector(".form-control button");
const fetchPostBtn = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

function sendRequests(method, url, data) {
  //   const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest();

  //     // Data Transfer
  //     xhr.open(method.toString(), url.toString()); // configuring the request
  //     xhr.responseType = "json";

  //     xhr.addEventListener("load", function () {
  //       if (xhr.status >= 200 && xhr.status < 300) {
  //         resolve(xhr.response);
  //       } else {
  //         reject(new Error("Server error! Try again!"));
  //       }
  //     });

  //     xhr.addEventListener("error", function () {
  //       reject(new Error("Failed to send request!"));
  //     });

  //     xhr.send(JSON.stringify(data));
  //   });

  return fetch(url, {
    method: method.toString(),
    body: JSON.stringify(data),
  }).then((response) => {
    return response.json();
  });
}

async function fetchPosts() {
  let response = await sendRequests(
    "GET",
    "https://jsonplaceholder.typicode.com/posts"
  );

  let fetchedPosts = response.slice(0, 15);

  for (const post of fetchedPosts) {
    const postEl = document.importNode(postTemplate.content, true);
    postEl.querySelector("h2").textContent = post.title.toUpperCase();
    postEl.querySelector("p").textContent = post.body;
    postEl.querySelector("li").id = post.id;

    listElement.append(postEl);
  }
}

async function createPost(title, content) {
  const userId = Math.floor(Math.random() * 10);
  const body = {
    title: title,
    body: content,
    userId: userId,
  };

  await sendRequests(
    "POST",
    "https://jsonplaceholder.typicode.com/posts",
    body
  );
}

fetchPostBtn.addEventListener("click", () => {
  fetchPosts();
});
form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent the browser from submitting the form
  const title = postTitle.value;
  const content = postContent.value;

  createPost(title, content);
});

postList.addEventListener("click", (event) => {
  if (event.target.id === "delete-btn") {
    const deletedID = event.target.closest("li").id;
    sendRequests(
      "DELETE",
      `https://jsonplaceholder.typicode.com/posts/${deletedID}`
    );
  }
});
