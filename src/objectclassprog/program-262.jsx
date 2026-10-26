function App() {
  const movies = [
    { title: "Mountain Adventure", rating: 8.5, genre: "Adventure" },
    { title: "The Lost City", rating: 7.2, genre: "Drama" },
    { title: "Code Runner", rating: 9.1, genre: "Sci-Fi" },
    { title: "Funny Days", rating: 6.8, genre: "Comedy" },
  ];

  return (
    <div>
      <h1>Movie Rating Catalog</h1>

      {movies.map((movie) => (
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <p>Genre: {movie.genre}</p>
          <p>Rating: {movie.rating}/10</p>
          <p>
            Category:{" "}
            {movie.rating >= 8
              ? "Highly Rated"
              : movie.rating >= 7
              ? "Good"
              : "Average"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;