import React from "react";

function Destination({ place }) {
    return (
        <div style={{
            backgroundColor: "#f0fdf4",
            padding: "20px",
            margin: "12px",
            borderRadius: "10px"
        }}>
            <h2>{place.name}</h2>
            <p>Location: {place.location}</p>
            <p>Best Season: {place.season}</p>
            <p>Estimated Budget: Rs. {place.budget}</p>
        </div>
    );
}

function App() {
    const destinations = [
        {
            id: 1,
            name: "Mount Everest",
            location: "Solukhumbu",
            season: "Spring",
            budget: 50000
        },
        {
            id: 2,
            name: "Pokhara",
            location: "Gandaki",
            season: "Autumn",
            budget: 12000
        },
        {
            id: 3,
            name: "Ilam",
            location: "Koshi",
            season: "Spring",
            budget: 8000
        }
    ];

    return (
        <div>
            <h1>Explore Nepal 🏔️</h1>

            {destinations.map(place => (
                <Destination key={place.id} place={place} />
            ))}
        </div>
    );
}

export default App;