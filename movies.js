const movies = ["Memoirs of a Geisha","Training Day", "Princess and the Frog",
"Spiderman","Deadpool","Avengers","Forrest Gump","The Help","Barefoot","The Conjuring","Cars","Grease","Wreck-It Ralph","Back to the Future","Spirited Away","The Shawshank Redemption","The Green Mile",
"Rollerball","Planet of the Apes","2001: A Space Odyssey","How To Train Your Dragon","Howl's Moving Castle","Ponyo","Catch Me If You Can","The Little Rascals","Scream","Shrek 2",
"Megamind","Shrek","The Interview","The Proposal","The Pursuit of Happyness","The Longest Yard","17 Again","Rush Hour","Athena","The Pianist","I feel Joker","The Godfather","The Mask","Pan's Labyrinth",
"Transformers","Shrek 4"];

const favoriteMovies =["Spider-Man: Beyond the Spider-Verse", "ratatouille", "Nausicaä of the Valley of the Wind"];
const movieReason =["The animation, music, story, and build up to the possible final movie are all large contributors to why this is my favorite movie.", 
"I grew up watching ratatouille. It's a large reason on why I love to cook, because 'anyone can cook'", "I just recently watched this one, but the art style, story and concept are all really new to me so I think thats why I really enjoyed it."];
const movieURL =["https://m.media-amazon.com/images/M/MV5BNTNlOTU3Y2EtYTg2NC00NmIyLTk1ZDgtNTY0ZjM4NDA1NjgwXkEyXkFqcGdeQXVyMTcyNjczNjU4._V1_.jpg", 
"https://cdn.shopify.com/s/files/1/0310/7487/7577/products/00875Rataouille_Blackstone__Rounded_e0444c0a-605a-4c1a-9e5b-9aed9106bbf5.webp?v=1673447987",
"https://m.media-amazon.com/images/M/MV5BZTI3NmJmYTQtNDg4NS00M2VlLTgzZDAtZWIwZDcyOWY5YzIzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg"
];

function displayMovies(movies) {
    for (let i=0; i<10; i++) {
        console.log( `A movie you should watch is: ${movies[i]}` );
    }
}


//displayMovies(movies);


function displayWMovies() {
    for (let i = 0; i < favoriteMovies.length; i++) {
        console.log(`${favoriteMovies[i]}\n - ${movieReason[i]}\n - ${movieURL[i]}\n`);
    }
}

displayWMovies();
