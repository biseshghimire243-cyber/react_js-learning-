function DestinationCard({ name, country, type, featured }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Type: {type}</p>

            {featured && <p>⭐ Featured Destination</p>}
        </div>
    );
}

function App() {
    const destinations = [
        {
            id: 1,
            name: "Mount Everest",
            country: "Nepal",
            type: "Mountain",
            featured: true
        },
        {
            id: 2,
            name: "Pokhara",
            country: "Nepal",
            type: "City",
            featured: true
        },
        {
            id: 3,
            name: "Lumbini",
            country: "Nepal",
            type: "Historical",
            featured: false
        }
    ];

    return (
        <div>
            <h1>Explore Nepal</h1>

            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    name={destination.name}
                    country={destination.country}
                    type={destination.type}
                    featured={destination.featured}
                />
            ))}
        </div>
    );
}

export default App;