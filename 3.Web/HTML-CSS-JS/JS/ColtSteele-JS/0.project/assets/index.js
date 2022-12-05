const baseUrl = "http://www.omdbapi.com/";
const input = document.querySelector("input");

const onSearch = async (event) => {
  const movies = await fetchData(baseUrl, {
    s: event.target.value,
  });

  console.log(movies);

  for (let movie of movies) {
    const div = document.createElement("div");

    div.innerHTML = `
        <img src=${movie.Poster} />
        <h1>${movie.Title}</h1>
    `;

    document.getElementById("movieTarget").appendChild(div);
  }
};

input.addEventListener("input", debounce(onSearch, 800));
