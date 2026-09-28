function Product({ name, price, discount }) {
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
    return (
        <div>
            <h1>Discount Products</h1>

            <Product
                name="Laptop"
                price={85000}
                discount={10}
            />

            <Product
                name="Headphones"
                price={5000}
                discount={20}
            />
        </div>
    );
}

export default App;