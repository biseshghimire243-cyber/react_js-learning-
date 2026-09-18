function App() {
    const username = "Bishesh";

    return (
        <div>
            {username ? (
                <h1>Welcome, {username} 👋</h1>
            ) : (
                <h1>Please enter your username.</h1>
            )}
        </div>
    );
}

export default App;