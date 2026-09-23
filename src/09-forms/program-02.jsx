function App() {
    const isLoggedIn = true;

    return (
        <div>
            <h1>
                {isLoggedIn
                    ? "Welcome Bishesh!"
                    : "Please Login"}
            </h1>
        </div>
    );
}

export default App;