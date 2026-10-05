function ProductCard({ name, price, available }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>

            {available ? (
                <p>Available</p>
            ) : (
                <p>Out of Stock</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <ProductCard
                name="Laptop"
                price={85000}
                available={true}
            />

            <ProductCard
                name="Headphones"
                price={2500}
                available={false}
            />
        </div>
    );
}

export default App;