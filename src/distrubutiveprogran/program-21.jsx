function DestinationCard({ name, location, description }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Location: {location}</p>
            <p>{description}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Nepal Destinations</h1>

            <DestinationCard
                name="Mount Everest"
                location="Solukhumbu"
                description="The highest mountain in the world."
            />

            <DestinationCard
                name="Pokhara"
                location="Gandaki"
                description="A beautiful city famous for lakes and mountains."
            />
        </div>
    );
}

export default App;