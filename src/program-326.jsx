import React from "react";

function WeatherCard({ city, temperature, condition, icon }) {
    return (
        <div style={{
            display: "inline-block",
            padding: "20px",
            margin: "10px",
            backgroundColor: "#e0f2fe",
            borderRadius: "12px",
            textAlign: "center",
            width: "180px"
        }}>
            <h2>{city}</h2>
            <h1>{icon}</h1>
            <h2>{temperature}°C</h2>
            <p>{condition}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Weather Dashboard 🌤️</h1>

            <WeatherCard
                city="Kathmandu"
                temperature={25}
                condition="Sunny"
                icon="☀️"
            />

            <WeatherCard
                city="Pokhara"
                temperature={22}
                condition="Cloudy"
                icon="☁️"
            />

            <WeatherCard
                city="Biratnagar"
                temperature={29}
                condition="Hot"
                icon="🌤️"
            />
        </div>
    );
}

export default App;