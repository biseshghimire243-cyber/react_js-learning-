function ProductCard({ name, category, price, stock }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Category: {category}</p>
            <p>Price: Rs. {price}</p>
            <p>Stock: {stock}</p>

            {stock > 0 ? (
                <p>Available for Purchase</p>
            ) : (
                <p>Out of Stock</p>
            )}
        </div>
    );
}

function App() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            category: "Electronics",
            price: 85000,
            stock: 5
        },
        {
            id: 2,
            name: "Keyboard",
            category: "Accessories",
            price: 2500,
            stock: 0
        },
        {
            id: 3,
            name: "Monitor",
            category: "Electronics",
            price: 22000,
            stock: 8
        }
    ];

    return (
        <div>
            <h1>Product Inventory</h1>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    category={product.category}
                    price={product.price}
                    stock={product.stock}
                />
            ))}
        </div>
    );
}

export default App;