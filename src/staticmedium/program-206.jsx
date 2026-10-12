function Mobile({ brand, model, price, storage, inStock }) {
  return (
    <div>
      <h3>{brand} {model}</h3>
      <p>Storage: {storage}</p>
      <p>Price: Rs. {price.toLocaleString()}</p>
      <p>{inStock ? "Available to Buy" : "Currently Unavailable"}</p>
      <p>
        {price >= 80000
          ? "Premium Phone"
          : price >= 40000
          ? "Mid-Range Phone"
          : "Budget Phone"}
      </p>
    </div>
  );
}

export default function App() {
  const phones = [
    { id: 1, brand: "Samsung", model: "Galaxy S Series", price: 120000, storage: "256 GB", inStock: true },
    { id: 2, brand: "Xiaomi", model: "Redmi Note Series", price: 35000, storage: "128 GB", inStock: true },
    { id: 3, brand: "Apple", model: "iPhone", price: 95000, storage: "128 GB", inStock: false },
  ];

  return (
    <div>
      <h1>Mobile Phone Catalog</h1>
      {phones.map((phone) => (
        <Mobile key={phone.id} {...phone} />
      ))}
    </div>
  );
}