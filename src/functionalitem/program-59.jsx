function Message({ type, children }) {
    return (
        <div>
            <h2>{type}</h2>
            <p>{children}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <Message type="Success">
                Your registration was completed successfully.
            </Message>

            <Message type="Warning">
                Please check your information.
            </Message>

            <Message type="Information">
                Welcome to our website.
            </Message>
        </div>
    );
}

export default App;