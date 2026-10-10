function GroceryItem({ name, quantity, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price per Item: Rs. {price}</p>
            <p>Subtotal: Rs. {quantity * price}</p>
        </div>
    );
}

function App() {
    const groceries = [
        { id: 1, name: "Rice", quantity: 2, price: 100 },
        { id: 2, name: "Milk", quantity: 3, price: 80 },
        { id: 3, name: "Eggs", quantity: 12, price: 20 }
    ];

    return (
        <div>
            <h1>Grocery List</h1>

            {groceries.map((item) => (
                <GroceryItem
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    price={item.price}
                />
            ))}
        </div>
    );
}

export default App;