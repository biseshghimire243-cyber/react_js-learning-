import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Student Form</h1>

            <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <h2>Your Name: {name}</h2>
        </div>
    );
}

export default App;