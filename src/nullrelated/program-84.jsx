function PhoneCard({ brand, model, price }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Price: Rs. {price}</p>

            {price >= 50000 ? (
                <p>Premium Phone</p>
            ) : (
                <p>Budget Phone</p>
            )}
        </div>
    );
}

function App() {
    const phones = [
        { id: 1, brand: "Samsung", model: "S25", price: 120000 },
        { id: 2, brand: "Xiaomi", model: "Redmi Note", price: 35000 },
        { id: 3, brand: "Apple", model: "iPhone 16", price: 140000 }
    ];

    return (
        <div>
            <h1>Smartphones</h1>

            {phones.map((phone) => (
                <PhoneCard
                    key={phone.id}
                    brand={phone.brand}
                    model={phone.model}
                    price={phone.price}
                />
            ))}
        </div>
    );
}

export default App;