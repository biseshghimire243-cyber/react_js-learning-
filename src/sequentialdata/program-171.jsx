function ParkingFee({ vehicle, hours, ratePerHour }) {
    const fee = hours * ratePerHour;

    return (
        <div>
            <h2>Parking Receipt</h2>
            <p>Vehicle: {vehicle}</p>
            <p>Hours Parked: {hours}</p>
            <p>Rate per Hour: Rs. {ratePerHour}</p>
            <p>Total Fee: Rs. {fee}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <ParkingFee vehicle="Car" hours={3} ratePerHour={50} />
            <ParkingFee vehicle="Motorcycle" hours={5} ratePerHour={20} />
        </div>
    );
}

export default App;