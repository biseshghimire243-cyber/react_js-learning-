function HotelCard({ name, location, rooms }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Available Rooms: {rooms}</p>

            {rooms > 0 ? (
                <p>Booking Available</p>
            ) : (
                <p>Fully Booked</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <HotelCard
                name="Himalayan Hotel"
                location="Kathmandu"
                rooms={8}
            />

            <HotelCard
                name="Lake View Hotel"
                location="Pokhara"
                rooms={0}
            />
        </div>
    );
}

export default App;