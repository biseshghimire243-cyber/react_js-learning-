function TravelPackage({ destination, days, price, difficulty }) {
    return (
        <div>
            <h2>{destination}</h2>
            <p>Duration: {days} Days</p>
            <p>Price: Rs. {price}</p>
            <p>Difficulty: {difficulty}</p>
        </div>
    );
}

function App() {
    const packages = [
        {
            id: 1,
            destination: "Everest Base Camp",
            days: 14,
            price: 150000,
            difficulty: "Hard"
        },
        {
            id: 2,
            destination: "Annapurna",
            days: 10,
            price: 100000,
            difficulty: "Medium"
        },
        {
            id: 3,
            destination: "Pokhara",
            days: 3,
            price: 20000,
            difficulty: "Easy"
        }
    ];

    return (
        <div>
            {packages.map((item) => (
                <TravelPackage
                    key={item.id}
                    destination={item.destination}
                    days={item.days}
                    price={item.price}
                    difficulty={item.difficulty}
                />
            ))}
        </div>
    );
}

export default App;