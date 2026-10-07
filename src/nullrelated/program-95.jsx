function OrderCard({ product, quantity, price, delivered }) {
    const total = quantity * price;

    return (
        <div>
            <h2>{product}</h2>
            <p>Quantity: {quantity}</p>
            <p>Price: Rs. {price}</p>
            <p>Total: Rs. {total}</p>

            {delivered ? (
                <p>✅ Delivered</p>
            ) : (
                <p>🚚 In Delivery</p>
            )}
        </div>
    );
}

function App() {
    const orders = [
        {
            id: 1,
            product: "Laptop",
            quantity: 1,
            price: 80000,
            delivered: true
        },
        {
            id: 2,
            product: "Keyboard",
            quantity: 2,
            price: 2500,
            delivered: false
        },
        {
            id: 3,
            product: "Mouse",
            quantity: 3,
            price: 1200,
            delivered: true
        }
    ];

    return (
        <div>
            <h1>My Orders</h1>

            {orders.map((order) => (
                <OrderCard
                    key={order.id}
                    product={order.product}
                    quantity={order.quantity}
                    price={order.price}
                    delivered={order.delivered}
                />
            ))}
        </div>
    );
}

export default App;