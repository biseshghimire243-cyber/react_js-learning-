function App() {
    const products = [
        {
            name: "T-Shirt",
            price: 1200
        },
        {
            name: "Jeans",
            price: 2500
        },
        {
            name: "Shoes",
            price: 3500
        }
    ];

    return (
        <div>
            <h1>Products</h1>

            {products.map((product, index) => (
                <div key={index}>
                    <h2>{product.name}</h2>
                    <p>Price: Rs. {product.price}</p>
                </div>
            ))}
        </div>
    );
}

export default App;