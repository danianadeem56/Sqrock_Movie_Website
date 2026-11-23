const searchInput = document.getElementById("searchInput");
const genreFilter = document.getElementById("genreFilter");

function filterMovies() {
  const query = searchInput.value.trim().toLowerCase();
  const genre = genreFilter.value;
  const results = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(query) &&
      (genre === "All" || movie.genre === genre),
  );
  displayMovies(results);
}
searchInput.addEventListener("input", filterMovies);
genreFilter.addEventListener("change", filterMovies);
