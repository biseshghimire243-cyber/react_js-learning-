function EventCard({ name, date, location, free }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Date: {date}</p>
            <p>Location: {location}</p>

            {free ? (
                <p>🎉 Free Event</p>
            ) : (
                <p>🎟️ Paid Event</p>
            )}
        </div>
    );
}

function App() {
    const events = [
        {
            id: 1,
            name: "React Workshop",
            date: "October 15, 2026",
            location: "Kathmandu",
            free: true
        },
        {
            id: 2,
            name: "Tech Conference",
            date: "November 10, 2026",
            location: "Pokhara",
            free: false
        },
        {
            id: 3,
            name: "Web Development Meetup",
            date: "December 5, 2026",
            location: "Itahari",
            free: true
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
                    free={event.free}
                />
            ))}
        </div>
    );
}

export default App;