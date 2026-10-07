function WeatherCard({ city, temperature, condition }) {
    return (
        <div>
            <h2>{city}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Condition: {condition}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <WeatherCard
                city="Kathmandu"
                temperature="24"
                condition="Sunny"
            />

            <WeatherCard
                city="Pokhara"
                temperature="22"
                condition="Cloudy"
            />
        </div>
    );
}

export default App;