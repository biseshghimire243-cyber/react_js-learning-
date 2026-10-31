import React from "react";

function Navigation({ items }) {
    return (
        <nav style={{ display: "flex", gap: "20px" }}>
            {items.map((item, index) => (
                <a
                    href={item.link}
                    key={index}
                    style={{ textDecoration: "none", color: "blue" }}
                >
                    {item.label}
                </a>
            ))}
        </nav>
    );
}

function App() {
    const menuItems = [
        { label: "Home", link: "#home" },
        { label: "About", link: "#about" },
        { label: "Services", link: "#services" },
        { label: "Contact", link: "#contact" }
    ];

    return (
        <div>
            <h2>Website Navigation</h2>
            <Navigation items={menuItems} />
        </div>
    );
}

export default App;