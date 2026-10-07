function TravelCard({ destination, country, days, budget }) {
    return (
        <div>
            <h2>{destination}</h2>
            <p>Country: {country}</p>
            <p>Duration: {days} days</p>
            <p>Budget: Rs. {budget}</p>
        </div>
    );
}

function App() {
    const trips = [
        {
            id: 1,
            destination: "Pokhara",
            country: "Nepal",
            days: 4,
            budget: 20000
        },
        {
            id: 2,
            destination: "Bangkok",
            country: "Thailand",
            days: 7,
            budget: 60000
        },
        {
            id: 3,
            destination: "Dubai",
            country: "UAE",
            days: 6,
            budget: 90000
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
                    days={trip.days}
                    budget={trip.budget}
                />
            ))}
        </div>
    );
}

export default App;