function DestinationCard({ name, country, popular }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>

            {popular && <p>⭐ Popular Destination</p>}
        </div>
    );
}

function App() {
    const destinations = [
        {
            id: 1,
            name: "Mount Everest",
            country: "Nepal",
            popular: true
        },
        {
            id: 2,
            name: "Taj Mahal",
            country: "India",
            popular: true
        },
        {
            id: 3,
            name: "Kyoto",
            country: "Japan",
            popular: false
        }
    ];

    return (
        <div>
            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    name={destination.name}
                    country={destination.country}
                    popular={destination.popular}
                />
            ))}
        </div>
    );
}

export default App;