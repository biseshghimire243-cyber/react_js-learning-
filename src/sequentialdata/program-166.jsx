function HotelBooking({ guest, nights, pricePerNight }) {
    const total = nights * pricePerNight;

    return (
        <div>
            <h2>Hotel Booking</h2>
            <p>Guest: {guest}</p>
            <p>Nights: {nights}</p>
            <p>Price per Night: Rs. {pricePerNight}</p>
            <p>Total Cost: Rs. {total}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <HotelBooking guest="Bishesh" nights={3} pricePerNight={2500} />
            <HotelBooking guest="Rahul" nights={2} pricePerNight={3000} />
        </div>
    );
}

export default App;