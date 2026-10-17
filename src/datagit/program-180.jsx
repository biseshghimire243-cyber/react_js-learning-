function WeatherCard({ city, temperature, humidity }) {
    return (
        <div>
            <h2>{city}</h2>
            <p>Temperature: {temperature}°C</p>
            <p>Humidity: {humidity}%</p>
            {temperature >= 30 ? <p>Hot Weather</p> : <p>Cool Weather</p>}
        </div>
    );
}

function App() {
    const weather = [
        { id: 1, city: "Biratnagar", temperature: 32, humidity: 65 },
        { id: 2, city: "Kathmandu", temperature: 24, humidity: 55 },
        { id: 3, city: "Pokhara", temperature: 28, humidity: 70 }
    ];

    return (
        <div>
            {weather.map((item) => (
                <WeatherCard
                    key={item.id}
                    city={item.city}
                    temperature={item.temperature}
                    humidity={item.humidity}
                />
            ))}
        </div>
    );
}

export default App;