// Sample movie data used by all pages.

const imageBasePath = window.location.pathname.includes("/HTML/")
  ? "../Images/"
  : "Images/";

const movies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: "Sci-Fi",
    description:
      "A skilled thief enters people's dreams to steal secrets and plant an idea.",
    cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
    releaseDate: "July 16, 2010",
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Inception+official+trailer",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "Action",
    description:
      "Batman faces the Joker, a criminal mastermind who brings chaos to Gotham City.",
    cast: "Christian Bale, Heath Ledger, Aaron Eckhart",
    releaseDate: "July 18, 2008",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=The+Dark+Knight+official+trailer",
  },
  {
    id: 3,
    title: "Joker",
    year: 2019,
    rating: 8.4,
    genre: "Drama",
    description:
      "A struggling comedian is gradually pushed toward a life of crime in Gotham.",
    cast: "Joaquin Phoenix, Robert De Niro, Zazie Beetz",
    releaseDate: "October 4, 2019",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Joker+2019+official+trailer",
  },
  {
    id: 4,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "Sci-Fi",
    description:
      "A team of explorers travels through a wormhole in search of a future for humanity.",
    cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
    releaseDate: "November 7, 2014",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Interstellar+official+trailer",
  },
  {
    id: 5,
    title: "The Conjuring",
    year: 2013,
    rating: 7.5,
    genre: "Horror",
    description:
      "Paranormal investigators help a family terrorized by a dark presence in their home.",
    cast: "Vera Farmiga, Patrick Wilson, Lili Taylor",
    releaseDate: "July 19, 2013",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=The+Conjuring+official+trailer",
  },
  {
    id: 6,
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    genre: "Romance",
    description:
      "A young couple from different backgrounds fall in love aboard the ill-fated Titanic.",
    cast: "Leonardo DiCaprio, Kate Winslet, Billy Zane",
    releaseDate: "December 19, 1997",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Titanic+official+trailer",
  },
  {
    id: 7,
    title: "The Hangover",
    year: 2009,
    rating: 7.7,
    genre: "Comedy",
    description:
      "Three friends try to piece together a wild night in Las Vegas before a wedding.",
    cast: "Bradley Cooper, Ed Helms, Zach Galifianakis",
    releaseDate: "June 5, 2009",
    poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=The+Hangover+official+trailer",
  },
  {
    id: 8,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    genre: "Action",
    description:
      "The Avengers assemble for a final mission to restore balance to the universe.",
    cast: "Robert Downey Jr., Chris Evans, Scarlett Johansson",
    releaseDate: "April 26, 2019",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Avengers+Endgame+official+trailer",
  },
  {
    id: 9,
    title: "The Proposal",
    year: 2009,
    rating: 6.8,
    genre: "Romance",
    description:
      "A demanding editor convinces her assistant to pretend they are engaged.",
    cast: "Sandra Bullock, Ryan Reynolds, Mary Steenburgen",
    releaseDate: "June 19, 2009",
    poster: "https://image.tmdb.org/t/p/w500/aEqtJDj8MvSDQwzggvcOfFTZMw.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=The+Proposal+2009+trailer",
  },
  {
    id: 10,
    title: "A Quiet Place",
    year: 2018,
    rating: 7.5,
    genre: "Horror",
    description:
      "A family must live in silence to survive creatures that hunt by sound.",
    cast: "Emily Blunt, John Krasinski, Millicent Simmonds",
    releaseDate: "April 6, 2018",
    poster:
      "https://www.newdvdreleasedates.com/images/posters/large/a-quiet-place-2018-02.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=A+Quiet+Place+trailer",
  },
  {
    id: 11,
    title: "The Martian",
    year: 2015,
    rating: 8.0,
    genre: "Sci-Fi",
    description:
      "An astronaut stranded on Mars uses science and determination to survive.",
    cast: "Matt Damon, Jessica Chastain, Chiwetel Ejiofor",
    releaseDate: "October 2, 2015",
    poster: imageBasePath + "martian.jpg",
    trailer: "https://www.youtube.com/results?search_query=The+Martian+trailer",
  },
  {
    id: 12,
    title: "The Pursuit of Happyness",
    year: 2006,
    rating: 8.0,
    genre: "Drama",
    description:
      "A struggling father works hard to build a better life for himself and his son.",
    cast: "Will Smith, Jaden Smith, Thandiwe Newton",
    releaseDate: "December 15, 2006",
    poster: imageBasePath + "pursuit_of_happyness.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=The+Pursuit+of+Happyness+trailer",
  },
  {
    id: 13,
    title: "John Wick",
    year: 2014,
    rating: 7.4,
    genre: "Action",
    description:
      "A retired hitman returns to the criminal underworld after a personal loss.",
    cast: "Keanu Reeves, Michael Nyqvist, Alfie Allen",
    releaseDate: "October 24, 2014",
    poster: imageBasePath + "john_wick.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=John+Wick+official+trailer",
  },
  {
    id: 14,
    title: "Superbad",
    year: 2007,
    rating: 7.6,
    genre: "Comedy",
    description:
      "Two high-school friends try to make the most of one unforgettable night.",
    cast: "Jonah Hill, Michael Cera, Christopher Mintz-Plasse",
    releaseDate: "August 17, 2007",
    poster: "https://image.tmdb.org/t/p/w500/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Superbad+official+trailer",
  },
  {
    id: 15,
    title: "Home Alone",
    year: 1990,
    rating: 7.7,
    genre: "Comedy",
    description:
      "A young boy is accidentally left home alone and must protect his house from burglars.",
    cast: "Macaulay Culkin, Joe Pesci, Daniel Stern",
    releaseDate: "November 16, 1990",
    poster: "https://image.tmdb.org/t/p/w500/9wSbe4CwObACCQvaUVhWQyLR5Vz.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Home+Alone+official+trailer",
  },
  {
    id: 16,
    title: "Insidious",
    year: 2010,
    rating: 6.8,
    genre: "Horror",
    description:
      "A family tries to save their son after he falls into a mysterious, frightening state.",
    cast: "Patrick Wilson, Rose Byrne, Ty Simpkins",
    releaseDate: "April 1, 2011",
    poster: "https://image.tmdb.org/t/p/w500/1egpmVXuXed58TH2UOnX1nATTrf.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Insidious+official+trailer",
  },
  {
    id: 17,
    title: "La La Land",
    year: 2016,
    rating: 8.0,
    genre: "Romance",
    description:
      "A musician and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    cast: "Ryan Gosling, Emma Stone, John Legend",
    releaseDate: "December 9, 2016",
    poster: imageBasePath + "la_la_land.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=La+La+Land+official+trailer",
  },
  {
    id: 18,
    title: "Forrest Gump",
    year: 1994,
    rating: 8.8,
    genre: "Drama",
    description:
      "A kind-hearted man experiences remarkable moments in history while searching for love and purpose.",
    cast: "Tom Hanks, Robin Wright, Gary Sinise",
    releaseDate: "July 6, 1994",
    poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=Forrest+Gump+official+trailer",
  },
];
