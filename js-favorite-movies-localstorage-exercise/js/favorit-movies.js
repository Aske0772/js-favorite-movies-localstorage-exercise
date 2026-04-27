"use strict";

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
];


// Henter det HTML-element, vi skal vise favorit-udstillingerne i
const favoritesContainer = document.querySelector("#favorites-container");

/*
  Her gemmes kun udstillings-id'er som favoritter i gemt i localStorage.
  Hvis der ikke ligger noget i localStorage endnu, bruger vi et tomt array.
*/
let favoriteIds = JSON.parse(localStorage.getItem("favoriteExhibitions")) || [];

// Her laves et nyt array med kun de udstillinger, hvis id findes i favoriteIds
const favoriteExhibitions = exhibitions.filter((item) => {
    return favoriteIds.includes(item.id);
});


/*
Her oprettes funktionen displayExhibitions, som skal vise udstillingerne i browseren.
Funktionen modtager en liste med udstillinger som parameter.
*/
function displayExhibitions(exhibitionList) {

    if (exhibitionList.length === 0 ){
        favoritesContainer.innerHTML = "<p>Du har endnu ikke valgt nogen favoritudstillinger</p>";
        return;
    }


    const html = exhibitionList.map((item) => {

    // Her indsætter jeg HTML-kode i containeren med data fra hvert objekt.
      return `
      <!-- Her opbygger jeg en HTML-struktur med data fra mit JavaScript-array -->
      <article>
        <h2>${item.udstillingsnavn}</h2>
        <h3><span id="periode">Periode:</span> ${item.periode}</h3>
        <h3><span id="placering">Placering:</span> ${item.placering}</h3>
        <p><span id="beskrivelse">Beskrivelse:</span> ${item.beskrivelse}</p>
        <p><span id="start-date">Exhibition Start date: </span><time datetime="${item.startdato}">${item.startdato}</time></p>
        <p><span id="end-date">Exhibition End date: </span><time datetime="${item.slutdato}">${item.slutdato}</time></p>
      </article>
    `;
  }).join("");

  favoritesContainer.innerHTML = html;

}

// Her kaldes funktionen displayExhibitions og sender hele exhibitions-arrayet med ind som argument.
displayExhibitions(favoriteExhibitions);