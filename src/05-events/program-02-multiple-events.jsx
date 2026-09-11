function App() {
    function handleClick() {
        alert("Button clicked!");
    }

    function handleMouseOver() {
        console.log("Mouse is over the heading");
    }

    function handleDoubleClick() {
        alert("Double clicked!");
    }

    return (
        <div>
            <h1 onMouseOver={handleMouseOver}>
                React Events
            </h1>

            <button onClick={handleClick}>
                Click Me
            </button>

            <br />
            <br />

            <button onDoubleClick={handleDoubleClick}>
                Double Click Me
            </button>
        </div>
    );
}

export default App;