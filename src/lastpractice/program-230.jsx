function EventSales({ eventName, ticketPrice, ticketsSold, capacity }) {
  const revenue = ticketPrice * ticketsSold;
  const remainingSeats = capacity - ticketsSold;
  const percentage = (ticketsSold / capacity) * 100;

  return (
    <div>
      <h3>{eventName}</h3>
      <p>Ticket Price: Rs. {ticketPrice}</p>
      <p>Tickets Sold: {ticketsSold}</p>
      <p>Remaining Seats: {remainingSeats}</p>
      <p>Occupancy: {percentage.toFixed(1)}%</p>
      <h4>Total Revenue: Rs. {revenue.toLocaleString()}</h4>
      <p>{remainingSeats === 0 ? "Sold Out" : "Tickets Available"}</p>
    </div>
  );
}

export default function App() {
  const events = [
    { id: 1, eventName: "Music Festival", ticketPrice: 1000, ticketsSold: 500, capacity: 500 },
    { id: 2, eventName: "Tech Conference", ticketPrice: 1500, ticketsSold: 300, capacity: 400 },
    { id: 3, eventName: "College Program", ticketPrice: 300, ticketsSold: 150, capacity: 200 },
  ];

  return (
    <div>
      <h1>Event Ticket Sales Report</h1>
      {events.map((event) => (
        <EventSales key={event.id} {...event} />
      ))}
    </div>
  );
}