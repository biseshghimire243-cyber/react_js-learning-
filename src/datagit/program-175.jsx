function MenuItem({ name, price, vegetarian }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Price: Rs. {price}</p>
            {vegetarian ? <p>Vegetarian</p> : <p>Non-Vegetarian</p>}
        </div>
    );
}

function App() {
    const menu = [
        { id: 1, name: "Veg Momo", price: 150, vegetarian: true },
        { id: 2, name: "Chicken Momo", price: 200, vegetarian: false },
        { id: 3, name: "Veg Chowmein", price: 180, vegetarian: true }
    ];

    return (
        <div>
            <h1>Restaurant Menu</h1>
            {menu.map((item) => (
                <MenuItem
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    vegetarian={item.vegetarian}
                />
            ))}
        </div>
    );
}

export default App;