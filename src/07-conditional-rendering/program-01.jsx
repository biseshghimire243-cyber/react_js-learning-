function App() {
    const isLoggedIn = true;

    if (isLoggedIn) {
        return (
            <div>
                <h1>Welcome Bishesh!</h1>
                <p>You are logged in.</p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>Please Login</h1>
                <p>You are not logged in.</p>
            </div>
        );
    }
}

export default App;