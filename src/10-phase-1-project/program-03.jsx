import { useState } from "react";

function App() {
    const [name, setName] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert(`Welcome ${name}!`);
    }

    return (
        <div>
            <h1>Login Form</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />

                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    );
}

export default App;