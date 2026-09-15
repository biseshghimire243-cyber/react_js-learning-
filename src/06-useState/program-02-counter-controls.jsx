import { useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>Counter</h1>

            <h2>{count}</h2>

            <button onClick={increase}>
                +
            </button>

            <button onClick={decrease}>
                -
            </button>
        </div>
    );
}

export default App;