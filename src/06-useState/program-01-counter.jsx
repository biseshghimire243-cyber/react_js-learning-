import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counter</h1>

            <h2>{count}</h2>

            <button onClick={increase}>
                Increase
            </button>
        </div>
    );
}

export default App;