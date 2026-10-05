function DestinationCard({ name, country, type }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Type: {type}</p>
        </div>
    );
}

function App() {
    const destinations = [
        {
            id: 1,
            name: "Mount Everest",
            country: "Nepal",
            type: "Mountain"
        },
        {
            id: 2,
            name: "Pokhara",
            country: "Nepal",
            type: "City"
        },
        {
            id: 3,
            name: "Paris",
            country: "France",
            type: "City"
        },
        {
            id: 4,
            name: "Bali",
            country: "Indonesia",
            type: "Island"
        }
    ];

    return (
        <div>
            <h1>Travel Destinations</h1>

            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    name={destination.name}
                    country={destination.country}
                    type={destination.type}
                />
            ))}
        </div>
    );
}

export default App;