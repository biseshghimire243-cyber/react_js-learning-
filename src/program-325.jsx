import React from "react";

function MenuItem({ item }) {
    return (
        <div style={{
            padding: "15px",
            borderBottom: "1px solid #ddd"
        }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <strong>Rs. {item.price}</strong>
        </div>
    );
}

function App() {
    const menu = [
        {
            id: 1,
            name: "Chicken Momo",
            description: "Steamed dumplings",
            price: 180
        },
        {
            id: 2,
            name: "Veg Chowmein",
            description: "Fried noodles with vegetables",
            price: 120
        },
        {
            id: 3,
            name: "Fried Rice",
            description: "Special fried rice",
            price: 150
        }
    ];

    return (
        <div>
            <h1>Restaurant Menu 🍽️</h1>

            {menu.map(item => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    );
}

export default App;