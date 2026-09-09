function Card() {
    return (
        <div>
            <h2>React.js</h2>
            <p>JavaScript library for building user interfaces.</p>
            <button>Learn More</button>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>My Courses</h1>

            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default App;