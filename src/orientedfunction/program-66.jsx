function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
            <nav>
                <a href="/">Home</a>{" "}
                <a href="/about">About</a>{" "}
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}

function App() {
    return (
        <div>
            <Header title="My React Website" />

            <main>
                <h2>Home Page</h2>
                <p>Welcome to my website.</p>
            </main>
        </div>
    );
}

export default App;