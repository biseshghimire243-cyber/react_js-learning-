function SmartphoneCard({ brand, model, price, storage }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Price: Rs. {price}</p>
            <p>Storage: {storage} GB</p>
            {price < 50000 ? <p>Budget Phone</p> : <p>Premium Phone</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <SmartphoneCard brand="Samsung" model="A55" price={45000} storage={128} />
            <SmartphoneCard brand="Apple" model="iPhone 16" price={120000} storage={256} />
        </div>
    );
}

export default App; the data has bene added well and modified and function askhASDHFBFdfhHLFDWHSF
