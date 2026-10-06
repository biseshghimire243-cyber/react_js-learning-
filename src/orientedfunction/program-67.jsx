function MovieCard({ title, genre, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}/10</p>

            {rating >= 8 && <p>⭐ Highly Recommended</p>}
        </div>
    );
}

function App() {
    const movies = [
        {
            id: 1,
            title: "Interstellar",
            genre: "Sci-Fi",
            rating: 9
        },
        {
            id: 2,
            title: "Avatar",
            genre: "Adventure",
            rating: 8
        },
        {
            id: 3,
            title: "Example Movie",
            genre: "Drama",
            rating: 6
        }
    ];

    return (
        <div>
            <h1>Movie List</h1>

            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genre={movie.genre}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}

export default App;