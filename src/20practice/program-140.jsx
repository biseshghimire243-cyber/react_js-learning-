function EmployeeCard({ name, position, salary }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Position: {position}</p>
            <p>Salary: Rs. {salary}</p>

            {salary >= 50000 && <p>Senior Salary Range</p>}
        </div>
    );
}

function App() {
    return (
        <div>
            <EmployeeCard
                name="Bishesh"
                position="Developer"
                salary={65000}
            />

            <EmployeeCard
                name="Suman"
                position="Designer"
                salary={40000}
            />
        </div>
    );
}

export default App;