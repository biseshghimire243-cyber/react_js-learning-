import React from "react";

function GreetingCard({ name, message, emoji }) {
    return (
        <div style={{
            padding: "25px",
            margin: "15px",
            backgroundColor: "#ffe4ec",
            borderRadius: "15px",
            textAlign: "center"
        }}>
            <h2>Hello, {name} {emoji}</h2>
            <p>{message}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Greeting Cards</h1>

            <GreetingCard
                name="Bishesh"
                message="Keep learning and achieving your goals!"
                emoji="🚀"
            />

            <GreetingCard
                name="Rahul"
                message="Have a wonderful day!"
                emoji="😊"
            />
        </div>
    );
}

export default App;