function Welcome({ name }) {
    return (
        <div>
            <h1>Welcome, {name}!</h1>
            <p>Welcome to my React practice.</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Welcome name="Bishesh" />
            <Welcome name="Rahul" />
            <Welcome name="Sita" />
        </div>
    );
}

export default App;