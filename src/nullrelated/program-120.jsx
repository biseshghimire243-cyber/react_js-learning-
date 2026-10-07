function DestinationCard({ name, country, type }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Country: {country}</p>
            <p>Type: {type}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <DestinationCard
                name="Mount Everest"
                country="Nepal"
                type="Mountain"
            />

            <DestinationCard
                name="Eiffel Tower"
                country="France"
                type="Landmark"
            />

            <DestinationCard
                name="Bali"
                country="Indonesia"
                type="Island"
            />
        </div>
    );
}

export default App;