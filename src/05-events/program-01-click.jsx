function App() {
    function showMessage() {
        alert("Welcome to React!");
    }

    return (
        <div>
            <h1>React Events</h1>

            <button onClick={showMessage}>
                Click Me
            </button>
        </div>
    );
}

export default App;