function OrderSummary({ customer, subtotal, deliveryFee }) {
    const total = subtotal + deliveryFee;

    return (
        <div>
            <h2>Order Summary</h2>
            <p>Customer: {customer}</p>
            <p>Subtotal: Rs. {subtotal}</p>
            <p>Delivery Fee: Rs. {deliveryFee}</p>
            <p>Total Amount: Rs. {total}</p>
            {subtotal >= 2000 && <p>Eligible for Free Delivery on qualifying orders</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <OrderSummary customer="Bishesh" subtotal={2500} deliveryFee={100} />
            <OrderSummary customer="Rahul" subtotal={1200} deliveryFee={150} />
        </div>
    );
}

export default App;