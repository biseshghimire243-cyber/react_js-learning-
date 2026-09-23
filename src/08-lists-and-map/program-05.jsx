function App() {
    const destinations = [
        {
            name: "Pokhara",
            location: "Gandaki",
            activity: "Boating"
        },
        {
            name: "Everest",
            location: "Solukhumbu",
            activity: "Trekking"
        },
        {
            name: "Chitwan",
            location: "Chitwan",
            activity: "Jungle Safari"
        }
    ];

    return (
        <div>
            <h1>Explore Nepal</h1>

            {destinations.map((destination, index) => (
                <div key={index}>
                    <h2>{destination.name}</h2>
                    <p>
                        Location: {destination.location}
                    </p>
                    <p>
                        Activity: {destination.activity}
                    </p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export default App;