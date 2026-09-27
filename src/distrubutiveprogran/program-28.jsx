function PhoneCard({ brand, model, price, available }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Price: Rs. {price}</p>
            <p>
                Status: {available ? "Available" : "Out of Stock"}
            </p>
        </div>
    );
}

function App() {
    return (
        <div>
            <PhoneCard
                brand="Samsung"
                model="Galaxy S25"
                price={120000}
                available={true}
            />

            <PhoneCard
                brand="Apple"
                model="iPhone 16"
                price={140000}
                available={false}
            />
        </div>
    );
}

export default App;