function ShoppingItem({ name, price, quantity }) {
    const total = price * quantity;

    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: Rs. {total}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <ShoppingItem
                name="Keyboard"
                price={1500}
                quantity={2}
            />

            <ShoppingItem
                name="Mouse"
                price={800}
                quantity={3}
            />
        </div>
    );
}

export default App;