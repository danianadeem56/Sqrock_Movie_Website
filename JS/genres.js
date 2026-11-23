const selectedGenre = document.body.dataset.genre;
const genreContainer = document.getElementById("genreMovies");
const emptyMessage = document.getElementById("noResults");
const genreMovies = movies.filter((movie) => movie.genre === selectedGenre);

if (genreContainer) {
  genreContainer.innerHTML = genreMovies
    .map(
      (movie) => `
    <article class="movie-card">
      <a href="movie-details.html?id=${movie.id}">
        <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy">
      </a>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p class="rating">★ ${movie.rating}/10</p>
        <p>${movie.year} · ${movie.genre}</p>
        <p>${movie.description}</p>
        <a class="btn" href="movie-details.html?id=${movie.id}">View Details</a>
      </div>
    </article>`,
    )
    .join("");
}
if (emptyMessage && genreMovies.length === 0) {
  emptyMessage.textContent = "No movies available in this genre yet.";
}
