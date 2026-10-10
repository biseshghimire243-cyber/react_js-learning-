function ProductDiscount({ name, price, discount }) {
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
            <ProductDiscount name="Laptop" price={80000} discount={10} />
            <ProductDiscount name="Headphones" price={3000} discount={15} />
        </div>
    );
}

export default App;