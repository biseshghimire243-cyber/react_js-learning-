function EventCard({ name, location, ticketPrice, seats }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>Ticket: Rs. {ticketPrice}</p>
            <p>Available Seats: {seats}</p>

            {seats > 0 ? (
                <p>🎟️ Tickets Available</p>
            ) : (
                <p>❌ Sold Out</p>
            )}
        </div>
    );
}

function App() {
    const events = [
        {
            id: 1,
            name: "React Workshop",
            location: "Kathmandu",
            ticketPrice: 500,
            seats: 25
        },
        {
            id: 2,
            name: "Tech Conference",
            location: "Pokhara",
            ticketPrice: 1500,
            seats: 0
        },
        {
            id: 3,
            name: "Web Development Meetup",
            location: "Itahari",
            ticketPrice: 300,
            seats: 40
        }
    ];

    return (
        <div>
            <h1>Upcoming Events</h1>

            {events.map((event) => (
                <EventCard
                    key={event.id}
                    name={event.name}
                    location={event.location}
                    ticketPrice={event.ticketPrice}
                    seats={event.seats}
                />
            ))}
        </div>
    );
}

export default App;