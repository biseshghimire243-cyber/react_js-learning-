function DestinationCard({ name, country, famousFor }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Famous For: {famousFor}</p>
        </div>
    );
}

function App() {
    const destinations = [
        {
            id: 1,
            name: "Mount Everest",
            country: "Nepal",
            famousFor: "World's Highest Mountain"
        },
        {
            id: 2,
            name: "Eiffel Tower",
            country: "France",
            famousFor: "Iconic Landmark"
        },
        {
            id: 3,
            name: "Bali",
            country: "Indonesia",
            famousFor: "Beaches and Tourism"
        }
    ];

    return (
        <div>
            <h1>World Destinations</h1>

            {destinations.map((destination) => (
                <DestinationCard
                    key={destination.id}
                    name={destination.name}
                    country={destination.country}
                    famousFor={destination.famousFor}
                />
            ))}
        </div>
    );
}

export default App;