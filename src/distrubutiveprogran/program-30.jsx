function ProductCard({ name, price, category }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>
            <p>Category: {category}</p>
        </div>
    );
}

function ProductList() {
    const products = [
        {
            id: 1,
            name: "Laptop",
            price: 85000,
            category: "Electronics"
        },
        {
            id: 2,
            name: "Keyboard",
            price: 2500,
            category: "Accessories"
        },
        {
            id: 3,
            name: "Headphones",
            price: 3500,
            category: "Accessories"
        }
    ];

    return (
        <div>
            <h1>Product Store</h1>

            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                />
            ))}
        </div>
    );
}

export default ProductList;