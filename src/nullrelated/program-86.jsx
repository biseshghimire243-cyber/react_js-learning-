function HotelCard({ name, location, price, available }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Price per night: Rs. {price}</p>

            {available ? (
                <p>Available</p>
            ) : (
                <p>Fully Booked</p>
            )}
        </div>
    );
}

function App() {
    const hotels = [
        {
            id: 1,
            name: "Himalayan Hotel",
            location: "Kathmandu",
            price: 4500,
            available: true
        },
        {
            id: 2,
            name: "Lake View Resort",
            location: "Pokhara",
            price: 7000,
            available: false
        },
        {
            id: 3,
            name: "Mountain Lodge",
            location: "Namche",
            price: 3500,
            available: true
        }
    ];

    return (
        <div>
            <h1>Hotels</h1>

            {hotels.map((hotel) => (
                <HotelCard
                    key={hotel.id}
                    name={hotel.name}
                    location={hotel.location}
                    price={hotel.price}
                    available={hotel.available}
                />
            ))}
        </div>
    );
}

export default App;