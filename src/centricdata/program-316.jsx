import React from "react";

function Avatar({ name, color }) {
    const initials = name
        .split(" ")
        .map(word => word[0])
        .join("")
        .toUpperCase();

    return (
        <div style={{
            width: "65px",
            height: "65px",
            borderRadius: "50%",
            backgroundColor: color,
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "22px",
            fontWeight: "bold"
        }}>
            {initials}
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>User Avatars</h1>

            <Avatar name="Bishesh Ghimire" color="blue" />
            <br />

            <Avatar name="Rahul Sharma" color="green" />
            <br />

            <Avatar name="Sita Thapa" color="purple" />
        </div>
    );
}

export default App;