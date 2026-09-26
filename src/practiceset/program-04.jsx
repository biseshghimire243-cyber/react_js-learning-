// program-04.jsx

function Header() {
    return <h1>My Website</h1>;
}

function Content() {
    return <p>Welcome to my React website.</p>;
}

function Footer() {
    return <p>© 2026 My Website</p>;
}

function Website() {
    return (
        <div>
            <Header />
            <Content />
            <Footer />
        </div>
    );
}

export default Website;