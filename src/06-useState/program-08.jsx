import { useState } from "react";

function App() {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <h1>Number Changer</h1>

            <h2>{number}</h2>

            <button onClick={() => setNumber(number + 5)}>
                Add 5
            </button>

            <button onClick={() => setNumber(number - 5)}>
                Subtract 5
            </button>
        </div>
    );
}

export default App;