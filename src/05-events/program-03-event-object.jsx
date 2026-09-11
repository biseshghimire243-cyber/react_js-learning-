function App() {
    function handleClick(event) {
        console.log(event);
        console.log("Button clicked!");
    }

    function handleInput(event) {
        console.log("Typed:", event.target.value);
    }

    return (
        <div>
            <h1>Event Object</h1>

            <button onClick={handleClick}>
                Click Me
            </button>

            <br />
            <br />

            <input
                type="text"
                placeholder="Type something"
                onChange={handleInput}
            />
        </div>
    );
}

export default App;