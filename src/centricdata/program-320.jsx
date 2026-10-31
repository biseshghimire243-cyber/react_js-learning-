import React from "react";

function CartItem({ item }) {
    const total = item.price * item.quantity;

    return (
        <tr>
            <td>{item.name}</td>
            <td>Rs. {item.price}</td>
            <td>{item.quantity}</td>
            <td>Rs. {total}</td>
        </tr>
    );
}

function App() {
    const cart = [
        { id: 1, name: "T-Shirt", price: 1200, quantity: 2 },
        { id: 2, name: "Jeans", price: 2500, quantity: 1 },
        { id: 3, name: "Shoes", price: 3500, quantity: 1 }
    ];

    const grandTotal = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h1>Shopping Cart Summary</h1>

            <table border="1" cellPadding="12">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                </thead>

                <tbody>
                    {cart.map(item => (
                        <CartItem key={item.id} item={item} />
                    ))}
                </tbody>
            </table>

            <h2>Grand Total: Rs. {grandTotal}</h2>
        </div>
    );
}

export default App;