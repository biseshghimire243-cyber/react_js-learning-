function EmployeeBonus({ name, salary, performance }) {
    const bonus = performance >= 8 ? salary * 0.1 : salary * 0.05;

    return (
        <div>
            <h2>{name}</h2>
            <p>Monthly Salary: Rs. {salary}</p>
            <p>Performance Score: {performance}/10</p>
            <p>Bonus: Rs. {bonus}</p>
            <p>Total: Rs. {salary + bonus}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <EmployeeBonus name="Bishesh" salary={40000} performance={9} />
            <EmployeeBonus name="Rahul" salary={35000} performance={6} />
        </div>
    );
}

export default App;