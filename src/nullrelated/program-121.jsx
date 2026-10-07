function ProductCard({ name, price, stock }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>

            {stock > 0 ? (
                <p>In Stock: {stock}</p>
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
                name="Keyboard"
                price="1500"
                stock={10}
            />

            <ProductCard
                name="Mouse"
                price="800"
                stock={0}
            />
        </div>
    );
}

export default App;