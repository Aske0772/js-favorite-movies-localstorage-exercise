"use strict";

const movies = [
{id: 1,
titel: "Inception",
genre: "science-fiction",
year: 2010,
duration: 2.28,
img: "img/inception.webp",
url: "https://www.imdb.com/title/tt1375666/"
},

{
id: 2,
titel: "The Dark Knight",
genre: "action",
year: "2008",
duration: "2.32",
img: "img/the-dark-knight.webp",
url: "https://www.imdb.com/title/tt0468569/"
},

{
id: 3,
titel: "Forrest Gump",
genre: "drama",
year: 1994,
duration: 2.22,
img: "img/forrest-gump.webp",
url: "https://www.imdb.com/title/tt0109830/"
},

{
id: 4,
titel: "Superbad",
genre: "comedy",
year: 2007,
duration: 1.53,
img: "img/superbad.webp",
url: "https://www.imdb.com/title/tt0829482/"
},

{
id: 5,
titel: "It",
genre: "horror",
year: 2017,
duration: 2.15,
img: "img/it.webp",
url: "https://www.imdb.com/title/tt1396484/"
},

{
id: 6,
titel: "The Hangover",
genre: "comedy",
year: 2009,
duration: 1.4,
img: "img/the-hangover.webp",
url: "https://www.imdb.com/title/tt1119646/"
},

{
id: 7,
titel: "The Conjuring",
genre: "horror",
year: 2013,
duration: 1.52,
img: "img/the-conjuring.webp",
url: "https://www.imdb.com/title/tt1457767/"
},

{
id: 8,
titel: "Interstellar",
genre: "science-fiction",
year: 2014,
duration: 2.55,
img: "img/interstellar.jpg",
url: "https://www.imdb.com/title/tt0816692/"
},

{
id: 9,
titel: "The Matrix",
genre: "science-fiction",
year: 1999,
duration: 3.02,
img: "img/the-matrix.webp",
url: "https://www.imdb.com/title/tt0133093/"
},

{
id: 10,
titel: "Pulp Fiction",
genre: "drama",
year: 1994,
duration: 1.39,
img: "img/pulp-fiction.webp",
url: "https://www.imdb.com/title/tt0110912/"
}



]



const moviesContainer = document.querySelector("#movies-container");
const selectedCategory = document.querySelector("#category-select")
const searchInput = document.querySelector("#gsearch")
const form = document.querySelector("form")
/*
Her opretter jeg en funktion, som skal vise udstillingerne i browseren.
Funktionen modtager en liste med udstillinger som parameter.
*/
function filterMovies() {
  // Henter den valgte periode(kategori) fra dropdown
  const selectedValue = selectedCategory.value;

  // Henter søge teksen fra søge feltet og laver indholdet til små bogstaver og fjerner mellemrum efter søgeteksten
  const searchTerm = searchInput.value.toLowerCase().trim();

  // vi starter med alle udstillinger fra listen (array)
  let filterMovies = movies;

  // Alle betyder alle perioder
  //Vi filtrerer kun på periode, hvis der er valgt en specifik periode
  if (selectedValue != "alle") {
    filterMovies = filterMovies.filter((item) => {
      return item.genre === selectedValue;
    });
  }

  if (searchTerm != "") {
    filterMovies = filterMovies.filter((item) => {
      return item.titel.toLowerCase().includes(searchTerm);
    });
  }

  displayMovies(filterMovies);
}

// sætter addEventListener på variablen selectedCategory (dropdown mneu) som lytter på om værdien i dropdown-menuen ændres
selectedCategory.addEventListener("change", filterMovies);

// sætter addEventListener på variablen searchInput (søgefelt) som lytter på om værdien i søgefeltet ændres
searchInput.addEventListener("input", filterMovies);

form.addEventListener("submit", (event) => {
event.preventDefault();
filterMovies();
});

// ____

function displayMovies(movieList) {
  // Her opbygger vi et nyt array/liste ved at bruge map() baseret på vores exhibitions-array/liste

  const html = movieList.map((item) => {
  return `
  <!-- Her opbygger vi vores HTML-streng -->
   <article>
        <h2>${item.titel}</h2>
        <h3>${item.genre}</h3>
        <h3>${item.year}</h3>
        <p>${item.duration}</p>
        <figure>
        <a href="${item.url}" target="_blank"Se på IMDB</a>
        <img src="${item.img}" alt="${item.titel}"></>
        <figcaption>${item.titel}</figcaption>
        </figure>
    </article>
  `;

}).join(""); // her samler vi det hele med join("") til en samlet HTML-streng
   
moviesContainer.innerHTML = html;
}
// Nyt array/liste som skal indeholde id'erne på de udstillinger, som er markeret som favorit
const favoriteButtons = document.querySelectorAll(".favorite-btn");

    favoriteButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const movieId = Number(button.dataset.id);
            toggleFavorite(moviesId);
        });
    });

/*
  Denne funktion skifter mellem:
  - tilføj favorit
  - fjern favorit
*/
function toggleFavorite(id) {
    if (favoriteIds.includes(id)) {
        favoriteIds = favoriteIds.filter((favoriteId) => {
            return favoriteId !== id;
        });
    } else {
        favoriteIds.push(id);
    }

    localStorage.setItem("favoriteMovies", JSON.stringify(favoriteIds));

    displayExhibitions(movies);
}

displayMovies(movies)