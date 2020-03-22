import * as genresAPI from "./fakeGenreService";

const movies = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title: "Terminator",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 6,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
      liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    title: "Die Hard",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 5,
    dailyRentalRate: 2.5,
      liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    title: "Mission Impossible",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Action" },
    numberInStock: 8,
    dailyRentalRate: 5.5,
      liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    title: "The Twilight Saga",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fantasy" },
    numberInStock: 9,
    dailyRentalRate: 3.5,
      liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    title: "Alien",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fantasy" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
      liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    title: "Lord Of The Rings",
    genre: { _id: "5b21ca3eeb7f6fbccd471814", name: "Fantasy" },
    numberInStock: 10,
    dailyRentalRate: 7.9,
      liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    title: "Harry Potter",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Fantasy" },
    numberInStock: 11,
    dailyRentalRate: 7.9,
      liked: true
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    title: "Deep Blue Sea",
    genre: { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    numberInStock: 4,
    dailyRentalRate: 3.5,
      liked: false
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    title: "The Avengers",
    genre: { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    numberInStock: 7,
    dailyRentalRate: 3.5,
      liked: false
  },
    {
        _id: "5b21ca3eeb7f6fbccd471810",
        title: "Underworld",
        genre: { _id: "5b21ca3eeb7f6fbccd471810", name: "Thriller" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        publishDate: "2018-01-03T19:04:28.809Z",
        liked: false
    },
    {
        _id: "5b21ca3eeb7f6fbccd471812",
        title: "Resident Evil",
        genre: { _id: "5b21ca3eeb7f6fbccd471812", name: "Thriller" },
        numberInStock: 6,
        dailyRentalRate: 2.5,
        liked: false
    },
    {
        _id: "5b21ca3eeb7f6fbccd471811",
        title: "The Hobbit",
        genre: { _id: "5b21ca3eeb7f6fbccd471811", name: "Fantasy" },
        numberInStock: 10,
        dailyRentalRate: 7.9,
        liked: true
    }
];

export function getMovies() {
  return movies;
}

export function getMovie(id) {
  return movies.find(m => m._id === id);
}

export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}

export function deleteMovie(id) {
  let movieInDb = movies.find(m => m._id === id);
  movies.splice(movies.indexOf(movieInDb), 1);
  return movieInDb;
}
