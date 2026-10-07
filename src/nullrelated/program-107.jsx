function VehicleCard({ brand, model, year, electric }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Year: {year}</p>

            {electric ? (
                <p>⚡ Electric Vehicle</p>
            ) : (
                <p>⛽ Fuel Vehicle</p>
            )}
        </div>
    );
}

function App() {
    const vehicles = [
        {
            id: 1,
            brand: "Tesla",
            model: "Model 3",
            year: 2025,
            electric: true
        },
        {
            id: 2,
            brand: "BMW",
            model: "X5",
            year: 2024,
            electric: false
        },
        {
            id: 3,
            brand: "Hyundai",
            model: "Kona",
            year: 2025,
            electric: true
        }
    ];

    return (
        <div>
            <h1>Vehicle Collection</h1>

            {vehicles.map((vehicle) => (
                <VehicleCard
                    key={vehicle.id}
                    brand={vehicle.brand}
                    model={vehicle.model}
                    year={vehicle.year}
                    electric={vehicle.electric}
                />
            ))}
        </div>
    );
}

export default App;