function ElectricityBill({ customer, units, rate }) {
    const bill = units * rate;

    return (
        <div>
            <h2>{customer}</h2>
            <p>Units Consumed: {units}</p>
            <p>Rate per Unit: Rs. {rate}</p>
            <p>Total Bill: Rs. {bill}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <ElectricityBill customer="Bishesh" units={120} rate={10} />
            <ElectricityBill customer="Rahul" units={200} rate={10} />
        </div>
    );
}

export default App;