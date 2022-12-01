const url = "https://swapi.dev/api/people/1/";
const button = document.querySelector("button");

function getData(url) {
  const response = axios.get(url);

  return response;
}

const starWars = getData(url);
starWars
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => console.log(error));

async function getAsyncData(url) {
  const data = await axios.get(url);

  console.log(data.data);

  return data.data;
}

getAsyncData(url).then((data) => {
  console.log("Resolved", data);
});

async function get3People() {
  const p1 = axios.get("https://swapi.dev/api/people/1/");
  const p2 = axios.get("https://swapi.dev/api/people/2/");
  const p3 = axios.get("https://swapi.dev/api/people/3/");

  const allResults = await Promise.all([p1, p2, p3]);

  allResults.map((result) => console.log(result.data));
}

get3People();
