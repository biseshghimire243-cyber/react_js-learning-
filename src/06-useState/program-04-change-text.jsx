import { useState } from "react";

function App() {

    const [message, setMessage] = useState("Hello React!");

    function changeMessage() {
        setMessage("Welcome to my React website!");
    }

    return (
        <div>
            <h1>{message}</h1>

            <button onClick={changeMessage}>
                Change Message
            </button>
        </div>
    );
}

export default App;