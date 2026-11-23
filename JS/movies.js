const movieContainer = document.getElementById("movieContainer");
const noResults = document.getElementById("noResults");

function displayMovies(movieList) {
  if (!movieContainer) return;
  movieContainer.innerHTML = movieList
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
  if (noResults)
    noResults.textContent = movieList.length
      ? ""
      : "No movies found. Try another search.";
}
displayMovies(movies);
