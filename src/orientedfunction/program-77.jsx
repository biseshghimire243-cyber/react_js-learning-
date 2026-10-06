function VehicleCard({ brand, model, type, electric }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Type: {type}</p>

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
            type: "Car",
            electric: true
        },
        {
            id: 2,
            brand: "BMW",
            model: "X5",
            type: "SUV",
            electric: false
        },
        {
            id: 3,
            brand: "Yamaha",
            model: "R15",
            type: "Bike",
            electric: false
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
                    type={vehicle.type}
                    electric={vehicle.electric}
                />
            ))}
        </div>
    );
}

export default App;