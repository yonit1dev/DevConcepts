const baseUrl = "http://www.omdbapi.com/";
const root = document.querySelector(".autocomplete");
root.innerHTML = `
  <label><b>Search for a Movie</b></label>
  <input class="input" />
  <div class="dropdown">
    <div class="dropdown-menu">
      <div class="dropdown-content results"></div>
    </div>
  </div>
`;

const dropdown = document.querySelector(".dropdown");
const input = document.querySelector(".input");
const results = document.querySelector(".results");

const onSearch = async (event) => {
  const movies = await fetchData(baseUrl, {
    s: event.target.value,
  });

  dropdown.classList.add("is-active");

  for (let movie of movies) {
    const movieEl = document.createElement("a");
    const poster = movie.Poster === "N/A" ? "" : movie.Poster;
    movieEl.classList.add("dropdown-item");

    dropdown.classList.add("is-active");
    movieEl.innerHTML = `
        <img src=${poster} class="image" />${movie.Title}
        <hr class="dropdown-divider" />
    `;

    results.appendChild(movieEl);
  }
};

input.addEventListener("input", debounce(onSearch, 800));
