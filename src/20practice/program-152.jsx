function DeliveryCard({ orderId, customer, status }) {
    return (
        <div>
            <h2>Order #{orderId}</h2>
            <p>Customer: {customer}</p>
            <p>Status: {status}</p>

            {status === "Delivered" && <p>Order completed successfully!</p>}
        </div>
    );
}

function App() {
    const orders = [
        { id: 101, customer: "Bishesh", status: "Delivered" },
        { id: 102, customer: "Sita", status: "Processing" },
        { id: 103, customer: "Rahul", status: "Shipped" }
    ];

    return (
        <div>
            {orders.map((order) => (
                <DeliveryCard
                    key={order.id}
                    orderId={order.id}
                    customer={order.customer}
                    status={order.status}
                />
            ))}
        </div>
    );
}

export default App;