function EventCard({ name, date, location, tickets }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Date: {date}</p>
            <p>Location: {location}</p>
            <p>
                Tickets: {tickets > 0 ? "Available" : "Sold Out"}
            </p>
        </div>
    );
}

function App() {
    const events = [
        {
            id: 1,
            name: "Tech Conference 2026",
            date: "October 15, 2026",
            location: "Kathmandu",
            tickets: 100
        },
        {
            id: 2,
            name: "React Workshop",
            date: "November 5, 2026",
            location: "Itahari",
            tickets: 0
        }
    ];

    return (
        <div>
            <h1>Upcoming Events</h1>

            {events.map((event) => (
                <EventCard
                    key={event.id}
                    name={event.name}
                    date={event.date}
                    location={event.location}
                    tickets={event.tickets}
                />
            ))}
        </div>
    );
}

export default App;