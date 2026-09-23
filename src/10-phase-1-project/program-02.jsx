import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h1>Registration Form</h1>

            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />

            <br />
            <br />

            <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            />

            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
        </div>
    );
}

export default App;