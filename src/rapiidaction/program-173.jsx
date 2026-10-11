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
            <SmartphoneCard brand="Samsung" model="