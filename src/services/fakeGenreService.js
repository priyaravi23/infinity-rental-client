export const genres = [
    { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
    { _id: "5b21ca3eeb7f6fbccd471814", name: "Fantasy" },
    { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
    { _id: "5b21ca3eeb7f6fbccd471811", name: "Horror" },
    { _id: "5b21ca3eeb7f6fbccd471812", name: "Dystopian" }
];

export function getGenres() {
  return genres.filter(g => g);
}
