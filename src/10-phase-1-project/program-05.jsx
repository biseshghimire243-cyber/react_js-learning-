import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        alert(
            `Name: ${name}\nMessage: ${message}`
        );
    }

    return (
        <div>
            <h1>Contact Us</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(event) =>
                        setName(event.target.value)
                    }
                />

                <br />
                <br />

                <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(event) =>
                        setMessage(event.target.value)
                    }
                />

                <br />
                <br />

                <button type="submit">
                    Send Message
                </button>
            </form>
        </div>
    );
}

export default App;