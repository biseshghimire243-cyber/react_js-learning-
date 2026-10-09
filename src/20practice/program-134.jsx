function EventCard({ name, date, location, free }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Date: {date}</p>
            <p>Location: {location}</p>

            {free ? (
                <p>Free Entry</p>
            ) : (
                <p>Paid Entry</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <EventCard
                name="Tech Fest"
                date="October 20"
                location="Kathmandu"
                free={true}
            />

            <EventCard
                name="Music Night"
                date="October 25"
                location="Pokhara"
                free={false}
            />
        </div>
    );
}

export default App;