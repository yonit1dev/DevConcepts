// XML Requests
// const xmlRequest = new XMLHttpRequest();

const url = "https://swapi.dev/api/planets/3/";

// xmlRequest.onload = function () {
//   const data = JSON.parse(this.response);
//   console.log(data);

//   const film = data.films[0];

//   const filmInfo = new XMLHttpRequest();

//   filmInfo.addEventListener("load", function () {
//     console.log(JSON.parse(this.response).director);
//   });

//   filmInfo.open("GET", film);

//   filmInfo.send();

//   console.log("Film Req Sent");
// };

// xmlRequest.open("GET", url);
// xmlRequest.send();
// console.log("Req Sent!");

// Fetch: a better way to implement api requests

fetch(url).then((response) => {
  if (!response.ok) {
    throw new Error(`Not a success!\nStatus Code: ${response.status} error.`);
  }
  response
    .json()
    .then((value) => {
      return value.films[0];
    })
    .then((film) => {
      console.log(film);
      const fetchedFilm = fetch(film, { method: "GET" });
      fetchedFilm.then((data) => {
        data
          .json()
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.log(error.message);
          })
          .finally(() => {
            console.log("Finished Film Request");
          });
      });
    })
    .catch((error) => {
      console.log(error.message);
    })
    .finally(() => {
      console.log("Finished Person Request");
    });
});

// axios: an even better way
// see the axios github page for usage
// similar to fetch but with some neat features