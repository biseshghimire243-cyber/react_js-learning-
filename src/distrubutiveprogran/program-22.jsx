function MovieCard({ title, genre, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}/10</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <MovieCard
                title="Inception"
                genre="Sci-Fi"
                rating={8.8}
            />

            <MovieCard
                title="Interstellar"
                genre="Sci-Fi"
                rating={8.7}
            />
        </div>
    );
}

export default App;