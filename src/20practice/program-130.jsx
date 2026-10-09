function SmartphoneCard({ brand, model, storage }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Storage: {storage} GB</p>
        </div>
    );
}

function App() {
    const phones = [
        {
            id: 1,
            brand: "Samsung",
            model: "Galaxy S25",
            storage: 256
        },
        {
            id: 2,
            brand: "Apple",
            model: "iPhone 17",
            storage: 256
        },
        {
            id: 3,
            brand: "Xiaomi",
            model: "15 Pro",
            storage: 512
        }
    ];

    return (
        <div>
            {phones.map((phone) => (
                <SmartphoneCard
                    key={phone.id}
                    brand={phone.brand}
                    model={phone.model}
                    storage={phone.storage}
                />
            ))}
        </div>
    );
}

export default App;