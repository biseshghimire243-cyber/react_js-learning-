function WeatherCard({ city, temperature, sunny }) {
    return (
        <div>
            <h2>{city}</h2>
            <p>Temperature: {temperature}°C</p>

            {sunny ? (
                <p>☀️ Sunny</p>
            ) : (
                <p>☁️ Cloudy</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Weather Information</h1>

            <WeatherCard
                city="Kathmandu"
                temperature={24}
                sunny={true}
            />

            <WeatherCard
                city="Pokhara"
                temperature={20}
                sunny={false}
            />

            <WeatherCard
                city="Itahari"
                temperature={28}
                sunny={true}
            />
        </div>
    );
}

export default App;