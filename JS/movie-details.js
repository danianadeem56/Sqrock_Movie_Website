const params = new URLSearchParams(window.location.search);
const movieId = Number(params.get("id"));
const selectedMovie = movies.find((movie) => movie.id === movieId);
const detailsArea = document.getElementById("movieDetails");

if (selectedMovie) {
  document.title = `${selectedMovie.title} | CineWorld`;
  detailsArea.innerHTML = `
    <div class="details-container">
      <img src="${selectedMovie.poster}" alt="${selectedMovie.title} poster">
      <div class="details-info">
        <p class="eyebrow">${selectedMovie.genre} MOVIE</p>
        <h1>${selectedMovie.title}</h1>
        <p class="rating">★ ${selectedMovie.rating}/10</p>
        <p><strong>Release date:</strong> ${selectedMovie.releaseDate} (${selectedMovie.year})</p>
        <p><strong>Genre:</strong> ${selectedMovie.genre}</p>
        <p><strong>Cast:</strong> ${selectedMovie.cast}</p>
        <p><strong>Description:</strong> ${selectedMovie.description}</p>
        <div class="details-actions">
          <a class="btn" href="${selectedMovie.trailer}" target="_blank" rel="noopener">Watch Trailer</a>
          <a class="btn" href="movies.html">Back to Movies</a>
        </div>
      </div>
    </div>`;
} else {
  detailsArea.innerHTML = `<div class="not-found"><h1>Movie Not Found</h1><p>Please select a movie from the movies page.</p><a class="btn" href="movies.html">Browse Movies</a></div>`;
}
