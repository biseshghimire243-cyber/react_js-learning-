function ProductCard({ name, price, discount }) {
    const finalPrice = price - (price * discount) / 100;

    return (
        <div>
            <h2>{name}</h2>
            <p>Original Price: Rs. {price}</p>
            <p>Discount: {discount}%</p>
            <p>Final Price: Rs. {finalPrice}</p>
        </div>
    );
}

function App() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 90000,
            discount: 10
        },
        {
            id: 2,
            name: "Keyboard",
            price: 3000,
            discount: 15
        },
        {
            id: 3,
            name: "Monitor",
            price: 25000,
            discount: 20
        }
    ];

    return (
        <div>
            <h1>Discount Products</h1>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                />
            ))}
        </div>
    );
}

export default App;