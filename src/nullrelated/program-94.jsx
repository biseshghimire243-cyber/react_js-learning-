function DestinationCard({ name, country, famous, popular }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Famous For: {famous}</p>

            {popular && <p>🔥 Popular Destination</p>}
        </div>
    );
}

function App() {
    const destinations = [
        {
            id: 1,
            name: "Mount Everest",
            country: "Nepal",
            famous: "Mountain",
            popular: true
        },
        {
            id: 2,
            name: "Paris",
            country: "France",
            famous: "Eiffel Tower",
            popular: true
        },
        {
            id: 3,
            name: "Lumbini",
            country: "Nepal",
            famous: "Birthplace of Buddha",
            popular: false
        }
    ];

    return (
        <div>
            <h1>Popular Destinations</h1>

            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    name={destination.name}
                    country={destination.country}
                    famous={destination.famous}
                    popular={destination.popular}
                />
            ))}
        </div>
    );
}

export default App;