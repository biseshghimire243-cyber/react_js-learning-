function ElectricityUsage({ customer, units, rate }) {
    const bill = units * rate;
    const averageDailyUsage = units / 30;

    return (
        <div>
            <h2>{customer}</h2>
            <p>Monthly Units: {units}</p>
            <p>Bill: Rs. {bill}</p>
            <p>Average Daily Usage: {averageDailyUsage.toFixed(1)} units</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <ElectricityUsage customer="Bishesh" units={150} rate={10} />
            <ElectricityUsage customer="Rahul" units={240} rate={10} />
        </div>
    );
}

export default App;