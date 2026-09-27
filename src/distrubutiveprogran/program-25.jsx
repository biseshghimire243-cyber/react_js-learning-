function Laptop({ brand, model, price }) {
    return (
        <div>
            <h2>{brand}</h2>
            <p>Model: {model}</p>
            <p>Price: Rs. {price}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Laptop Collection</h1>

            <Laptop
                brand="Dell"
                model="Inspiron 15"
                price={75000}
            />

            <Laptop
                brand="Lenovo"
                model="IdeaPad 5"
                price={68000}
            />
        </div>
    );
}

export default App;