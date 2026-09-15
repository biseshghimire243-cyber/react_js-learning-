import { useState } from "react";

function App() {

    const [show, setShow] = useState(true);

    function toggleMessage() {
        setShow(!show);
    }

    return (
        <div>
            <h1>Show and Hide</h1>

            {show && (
                <p>
                    Welcome to React.js!
                </p>
            )}

            <button onClick={toggleMessage}>
                Show / Hide
            </button>
        </div>
    );
}

export default App;