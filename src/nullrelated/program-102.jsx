function MovieCard({ title, genre, year, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Year: {year}</p>
            <p>Rating: {rating}/10</p>

            {rating >= 8 ? (
                <p>Highly Recommended</p>
            ) : (
                <p>Average Rating</p>
            )}
        </div>
    );
}

function App() {
    const movies = [
        {
            id: 1,
            title: "Interstellar",
            genre: "Sci-Fi",
            year: 2014,
            rating: 9
        },
        {
            id: 2,
            title: "Avatar",
            genre: "Adventure",
            year: 2009,
            rating: 8
        },
        {
            id: 3,
            title: "Example Movie",
            genre: "Drama",
            year: 2024,
            rating: 6
        }
    ];

    return (
        <div>
            <h1>Movie Collection</h1>

            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    genre={movie.genre}
                    year={movie.year}
                    rating={movie.rating}
                />
            ))}
        </div>
    );
}

export default App;