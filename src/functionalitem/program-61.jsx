function EmployeeCard({ name, position, salary }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Position: {position}</p>
            <p>Salary: Rs. {salary}</p>
        </div>
    );
}

function App() {
    const employees = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            position: "Frontend Developer",
            salary: 45000
        },
        {
            id: 2,
            name: "Rahul Sharma",
            position: "Backend Developer",
            salary: 50000
        },
        {
            id: 3,
            name: "Sita Thapa",
            position: "UI/UX Designer",
            salary: 40000
        }
    ];

    return (
        <div>
            <h1>Employee List</h1>

            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    name={employee.name}
                    position={employee.position}
                    salary={employee.salary}
                />
            ))}
        </div>
    );
}

export default App;