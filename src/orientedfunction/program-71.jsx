function LaptopCard({ brand, model, price, gaming }) {
    return (
        <div>
            <h2>{brand} {model}</h2>
            <p>Price: Rs. {price}</p>

            {gaming ? (
                <p>🎮 Gaming Laptop</p>
            ) : (
                <p>💼 Regular Laptop</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Laptop Collection</h1>

            <LaptopCard
                brand="Dell"
                model="G15"
                price={120000}
                gaming={true}
            />

            <LaptopCard
                brand="HP"
                model="Pavilion"
                price={85000}
                gaming={false}
            />
        </div>
    );
}

export default App;