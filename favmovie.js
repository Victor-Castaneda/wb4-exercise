const favoriteMovies = [
    {
        title: "Spider-Man: Beyond the Spider-Verse",
        reasoning: "The animation, music, story, and build up to the possible final movie are all large contributors to why this is my favorite movie.",
        url: "https://m.media-amazon.com/images/M/MV5BNTNlOTU3Y2EtYTg2NC00NmIyLTk1ZDgtNTY0ZjM4NDA1NjgwXkEyXkFqcGdeQXVyMTcyNjczNjU4._V1_.jpg"
    },
    {
        title: "Ratatouille",
        reasoning: "I grew up watching Ratatouille. It's a large reason why I love to cook, because 'anyone can cook'.",
        url: "https://cdn.shopify.com/s/files/1/0310/7487/7577/products/00875Rataouille_Blackstone__Rounded_e0444c0a-605a-4c1a-9e5b-9aed9106bbf5.webp?v=1673447987"
    },
    {
        title: "Nausicaä of the Valley of the Wind",
        reasoning: "I just recently watched this one, but the art style, story, and concept are all really new to me so I think that's why I really enjoyed it.",
        url: "https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
    }
];

function randomFinder(){
  let randomIndex = Math.floor(Math.random() * favoriteMovies.length);
  let randomMovie = favoriteMovies[randomIndex];
  
  // Display random movie
  document.getElementById("randomTitle").textContent = randomMovie.title;
  document.getElementById("randomReasoning").textContent = randomMovie.reasoning;
  document.getElementById("randomMovie").style.display = "block";
  document.querySelector("#randomMovie img").setAttribute("src", randomMovie.url);
}

// Populate dropdown menu
window.onload = function() {
  let dropdownMenu = document.getElementById("movieDropdown");
  favoriteMovies.forEach(movie => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `<a class="dropdown-item" href="#" onclick="selectMovie('${movie.title}')">${movie.title}</a>`;
    dropdownMenu.appendChild(listItem);
  });
};

// Function to select movie from dropdown
function selectMovie(title) {
  let selectedMovie = favoriteMovies.find(movie => movie.title === title);
  document.getElementById("randomTitle").textContent = selectedMovie.title;
  document.getElementById("randomReasoning").textContent = selectedMovie.reasoning;
  document.getElementById("randomMovie").style.display = "block";
  document.querySelector("#randomMovie img").setAttribute("src", selectedMovie.url);
}
