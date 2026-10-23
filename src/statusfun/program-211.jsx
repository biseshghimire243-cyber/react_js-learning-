function BusTicket({ passenger, destination, fare, seats }) {
  const total = fare * seats;

  return (
    <div>
      <h3>Passenger: {passenger}</h3>
      <p>Destination: {destination}</p>
      <p>Seats: {seats}</p>
      <p>Fare per Seat: Rs. {fare}</p>
      <h4>Total Fare: Rs. {total}</h4>
      <p>{seats >= 4 ? "Group Booking" : "Regular Booking"}</p>
    </div>
  );
}

export default function App() {
  const tickets = [
    { id: 1, passenger: "Aarav", destination: "Pokhara", fare: 800, seats: 2 },
    { id: 2, passenger: "Sita", destination: "Kathmandu", fare: 1200, seats: 4 },
    { id: 3, passenger: "Rohan", destination: "Chitwan", fare: 600, seats: 1 },
  ];

  return (
    <div>
      <h1>Bus Ticket Booking</h1>
      {tickets.map((ticket) => (
        <BusTicket key={ticket.id} {...ticket} />
      ))}
    </div>
  );
}