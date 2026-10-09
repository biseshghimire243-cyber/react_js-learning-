function VehicleCard({ brand, model, type, electric }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Type: {type}</p>

            {electric ? (
                <p>Electric Vehicle</p>
            ) : (
                <p>Fuel Vehicle</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <VehicleCard
                brand="Tesla"
                model="Model 3"
                type="Car"
                electric={true}
            />

            <VehicleCard
                brand="Toyota"
                model="Corolla"
                type="Car"
                electric={false}
            />
        </div>
    );
}

export default App;