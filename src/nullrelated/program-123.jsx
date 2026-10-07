function MovieCard({ title, genre, rating }) {
    return (
        <div>
            <h2>{title}</h2>
            <p>Genre: {genre}</p>
            <p>Rating: {rating}/10</p>

            {rating >= 8 && <p>Highly Recommended</p>}
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
                title="Example Movie"
                genre="Drama"
                rating={6.5}
            />
        </div>
    );
}

export default App;