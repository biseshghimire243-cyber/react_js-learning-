function App() {
  const reservations = [
    { guest: "Amit", table: 4, guests: 3, time: "12:00 PM" },
    { guest: "Sita", table: 2, guests: 2, time: "1:00 PM" },
    { guest: "Rohan", table: 6, guests: 5, time: "2:00 PM" },
    { guest: "Nisha", table: 1, guests: 4, time: "3:00 PM" },
  ];

  const totalGuests = reservations.reduce(
    (sum, reservation) => sum + reservation.guests,
    0
  );

  return (
    <div>
      <h1>Restaurant Reservation Summary</h1>

      {reservations.map((reservation) => (
        <div key={reservation.table}>
          <h3>Guest: {reservation.guest}</h3>
          <p>Table Number: {reservation.table}</p>
          <p>Number of Guests: {reservation.guests}</p>
          <p>Reservation Time: {reservation.time}</p>
        </div>
      ))}

      <h2>Total Reservations: {reservations.length}</h2>
      <h2>Total Guests: {totalGuests}</h2>
    </div>
  );
}

export default App;