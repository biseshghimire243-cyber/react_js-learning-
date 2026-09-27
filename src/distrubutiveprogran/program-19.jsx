function Navbar() {
    return (
        <nav>
            <a href="/">Home</a>{" "}
            <a href="/about">About</a>{" "}
            <a href="/contact">Contact</a>
        </nav>
    );
}

function App() {
    return (
        <div>
            <Navbar />
            <h1>My React Website</h1>
            <p>Welcome to my website.</p>
        </div>
    );
}

export default App;