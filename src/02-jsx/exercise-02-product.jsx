function App() {
    const productName = "Laptop";
    const price = 85000;
    const quantity = 2;

    const total = price * quantity;
    const discount = total * 0.10;
    const finalPrice = total - discount;

    return (
        <div>
            <h1>Product Bill</h1>

            <h2>{productName}</h2>

            <p>Price: Rs. {price}</p>
            <p>Quantity: {quantity}</p>
            <p>Total: Rs. {total}</p>
            <p>Discount: Rs. {discount}</p>
            <p>Final Price: Rs. {finalPrice}</p>
        </div>
    );
}

export default App;