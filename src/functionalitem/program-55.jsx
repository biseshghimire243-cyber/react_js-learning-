function Profile({ name, age, city }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>City: {city}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Profile name="Bishesh" age={22} city="Itahari" />
            <Profile name="Rahul" age={21} city="Kathmandu" />
        </div>
    );
}

export default App;