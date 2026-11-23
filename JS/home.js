const trendingContainer = document.getElementById("trendingMovies");
if (trendingContainer) {
  trendingContainer.innerHTML = movies
    .slice(0, 6)
    .map(
      (movie) => `
    <article class="movie-card">
      <a href="HTML/movie-details.html?id=${movie.id}">
        <img src="${movie.poster}" alt="${movie.title} poster" loading="lazy">
      </a>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p class="rating">★ ${movie.rating}/10</p>
        <p>${movie.year} · ${movie.genre}</p>
        <p>${movie.description}</p>
        <a class="btn" href="HTML/movie-details.html?id=${movie.id}">View Details</a>
      </div>
    </article>`,
    )
    .join("");
}
