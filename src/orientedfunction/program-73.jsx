function TravelCard({ destination, country, budget }) {
    return (
        <div>
            <h2>{destination}</h2>
            <p>Country: {country}</p>
            <p>Estimated Budget: Rs. {budget}</p>

            {budget < 50000 ? (
                <p>💰 Budget Friendly</p>
            ) : (
                <p>💎 Premium Trip</p>
            )}
        </div>
    );
}

function App() {
    const trips = [
        {
            id: 1,
            destination: "Pokhara",
            country: "Nepal",
            budget: 20000
        },
        {
            id: 2,
            destination: "Dubai",
            country: "UAE",
            budget: 80000
        },
        {
            id: 3,
            destination: "Thailand",
            country: "Thailand",
            budget: 45000
        }
    ];

    return (
        <div>
            <h1>Travel Packages</h1>

            {trips.map((trip) => (
                <TravelCard
                    key={trip.id}
                    destination={trip.destination}
                    country={trip.country}
                    budget={trip.budget}
                />
            ))}
        </div>
    );
}

export default App;