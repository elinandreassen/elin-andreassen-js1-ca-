const queryString = document.location.search;
const params = new URLSearchParams(queryString);

if (params.has("id")) {
  id = params.get("id");
} else {
  document.location.href = "/";
}

const baseURL = "https://rickandmortyapi.com/api/";
const characterURL = `${baseURL}character/`;
const detailsURL = `${characterURL}${id}`;

fetch(detailsURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    characterDetails(json);
  })
  .catch(function(error) {
    console.dir(error);
  });

function characterDetails(json) {

    console.dir(json);

    const name = document.querySelector("h1");
    name.innerHTML = json.name;

    const status = document.getElementById("status");
    status.innerHTML = json.status;

    const species = document.getElementById("species");
    species.innerHTML = json.species;

    const origin = document.getElementById("origin");
    origin.innerHTML = json.origin.name;

    const location = document.getElementById("location");
    location.innerHTML = json.location.name;

    const image = document.querySelector(".details-image");
    image.src = json.image;
    image.alt = json.name;

    document.title = json.name + " | " + document.title;
};
