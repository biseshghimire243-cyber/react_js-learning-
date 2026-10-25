function App() {
  const products = [
    { name: "T-Shirt", price: 1000, discount: 10 },
    { name: "Shoes", price: 3500, discount: 15 },
    { name: "Jacket", price: 5000, discount: 20 },
  ];

  return (
    <div>
      <h1>Product Discount Calculator</h1>

      {products.map((product) => {
        const discountAmount = (product.price * product.discount) / 100;
        const finalPrice = product.price - discountAmount;

        return (
          <div key={product.name}>
            <h2>{product.name}</h2>
            <p>Original Price: Rs. {product.price}</p>
            <p>Discount: {product.discount}%</p>
            <p>You Save: Rs. {discountAmount}</p>
            <h3>Final Price: Rs. {finalPrice}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;