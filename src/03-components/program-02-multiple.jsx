function Header() {
    return <h1>My Website</h1>;
}

function Content() {
    return <p>Welcome to my React learning project.</p>;
}

function Footer() {
    return <p>© 2026 My Website</p>;
}

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default App;