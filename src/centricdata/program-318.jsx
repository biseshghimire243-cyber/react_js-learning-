import React from "react";

function Rating({ value }) {
    const stars = Array.from(
        { length: 5 },
        (_, index) => index < value ? "★" : "☆"
    );

    return (
        <div style={{ color: "orange", fontSize: "25px" }}>
            {stars.map((star, index) => (
                <span key={index}>{star}</span>
            ))}

            <p style={{ color: "black", fontSize: "14px" }}>
                Rating: {value}/5
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Product Ratings</h1>

            <h3>Laptop</h3>
            <Rating value={5} />

            <h3>Keyboard</h3>
            <Rating value={4} />

            <h3>Mouse</h3>
            <Rating value={3} />
        </div>
    );
}

export default App;