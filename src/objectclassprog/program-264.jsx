function App() {
  const bookings = [
    { guest: "Amit", room: "Deluxe", price: 3500, nights: 2 },
    { guest: "Nisha", room: "Standard", price: 2000, nights: 3 },
    { guest: "Rohan", room: "Suite", price: 6000, nights: 1 },
  ];

  const totalRevenue = bookings.reduce(
    (sum, booking) => sum + booking.price * booking.nights,
    0
  );

  return (
    <div>
      <h1>Hotel Booking Summary</h1>

      {bookings.map((booking) => (
        <div key={booking.guest}>
          <h3>Guest: {booking.guest}</h3>
          <p>Room Type: {booking.room}</p>
          <p>Nights: {booking.nights}</p>
          <p>Cost: Rs. {booking.price * booking.nights}</p>
        </div>
      ))}

      <h2>Total Booking Revenue: Rs. {totalRevenue}</h2>
    </div>
  );
}

export default App;