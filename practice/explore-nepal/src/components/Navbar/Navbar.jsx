function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo">
                🇳🇵 Explore Nepal
            </div>

            <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">Destinations</a>
                <a href="#">Experiences</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </div>

            <button className="explore-btn">
                Explore Now
            </button>
        </nav>
    );
}

export default Navbar;