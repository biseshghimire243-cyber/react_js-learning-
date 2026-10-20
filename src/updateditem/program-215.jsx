function CinemaShow({ movie, showTime, availableSeats, ticketPrice }) {
  return (
    <div>
      <h3>{movie}</h3>
      <p>Show Time: {showTime}</p>
      <p>Available Seats: {availableSeats}</p>
      <p>Ticket Price: Rs. {ticketPrice}</p>
      <p>
        {availableSeats === 0
          ? "Sold Out"
          : availableSeats < 10
          ? "Limited Seats Available"
          : "Seats Available"}
      </p>
    </div>
  );
}

export default function App() {
  const shows = [
    { id: 1, movie: "Adventure Nepal", showTime: "10:00 AM", availableSeats: 25, ticketPrice: 300 },
    { id: 2, movie: "Space Journey", showTime: "2:00 PM", availableSeats: 5, ticketPrice: 400 },
    { id: 3, movie: "The Final Match", showTime: "6:00 PM", availableSeats: 0, ticketPrice: 350 },
  ];

  return (
    <div>
      <h1>Cinema Seat Booking</h1>
      {shows.map((show) => (
        <CinemaShow key={show.id} {...show} />
      ))}
    </div>
  );
}