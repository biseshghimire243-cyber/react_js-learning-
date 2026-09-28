function VehicleCard({ brand, model, price, electric }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Price: Rs. {price}</p>
            <p>
                Type: {electric ? "Electric Vehicle" : "Fuel Vehicle"}
            </p>
        </div>
    );
}

function VehicleList() {
    const vehicles = [
        {
            id: 1,
            brand: "Tesla",
            model: "Model 3",
            price: 9500000,
            electric: true
        },
        {
            id: 2,
            brand: "BMW",
            model: "X5",
            price: 18000000,
            electric: false
        },
        {
            id: 3,
            brand: "BYD",
            model: "Atto 3",
            price: 6500000,
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
                    price={vehicle.price}
                    electric={vehicle.electric}
                />
            ))}
        </div>
    );
}

export default VehicleList;