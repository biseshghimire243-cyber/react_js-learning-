function DestinationCard({ name, country, rating }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Rating: {rating}/5</p>
            {rating >= 4.5 && <p>Top Rated Destination</p>}
        </div>
    );
}

function App() {
    const destinations = [
        { id: 1, name: "Pokhara", country: "Nepal", rating: 4.8 },
        { id: 2, name: "Bangkok", country: "Thailand", rating: 4.3 },
        { id: 3, name: "Kyoto", country: "Japan", rating: 4.7 }
    ];

    return (
        <div>
            {destinations.map((place) => (
                <DestinationCard
                    key={place.id}
                    name={place.name}
                    country={place.country}
                    rating={place.rating}
                />
            ))}
        </div>
    );
}

export default App;