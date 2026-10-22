function Movie({ title, rating, genre }) {
  return (
    <div>
      <h3>{title}</h3>
      <p>Rating: {rating}/10</p>
      <p>Genre: {genre}</p>
      <p>{rating >= 8 ? "Highly Recommended" : "Worth Watching"}</p>
    </div>
  );
}

export default function App() {
  const movies = [
    { id: 1, title: "Interstellar", rating: 8.7, genre: "Sci-Fi" },
    { id: 2, title: "3 Idiots", rating: 8.4, genre: "Comedy" },
    { id: 3, title: "Avatar", rating: 7.9, genre: "Adventure" },
  ];

  return (
    <div>
      <h1>Movie Rating List</h1>
      {movies.map((movie) => (
        <Movie key={movie.id} {...movie} />
      ))}
    </div>
  );
}