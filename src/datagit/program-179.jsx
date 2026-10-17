function ShoppingOrder({ product, price, quantity, delivered }) {
    const total = price * quantity;

    return (
        <div>
            <h2>{product}</h2>
            <p>Price: Rs. {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: Rs. {total}</p>
            {delivered ? <p>Delivered</p> : <p>Delivery Pending</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <ShoppingOrder product="Keyboard" price={1500} quantity={2} delivered={true} />
            <ShoppingOrder product="Monitor" price={18000} quantity={1} delivered={false} />
        </div>
    );
}

export default App;