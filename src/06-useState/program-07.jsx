import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Name Input</h1>

            <input
                type="text"
                placeholder="Enter your name"
                onChange={(event) => setName(event.target.value)}
            />

            <h2>Hello, {name}</h2>
        </div>
    );
}

export default App;