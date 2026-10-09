function MobilePlan({ name, data, calls, price }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Internet: {data} GB</p>
            <p>Call Minutes: {calls}</p>
            <p>Monthly Price: Rs. {price}</p>
        </div>
    );
}

function App() {
    const plans = [
        { id: 1, name: "Basic", data: 5, calls: 100, price: 299 },
        { id: 2, name: "Standard", data: 20, calls: 500, price: 599 },
        { id: 3, name: "Premium", data: 50, calls: 1000, price: 999 }
    ];

    return (
        <div>
            {plans.map((plan) => (
                <MobilePlan
                    key={plan.id}
                    name={plan.name}
                    data={plan.data}
                    calls={plan.calls}
                    price={plan.price}
                />
            ))}
        </div>
    );
}

export default App;