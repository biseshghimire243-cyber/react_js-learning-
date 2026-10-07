function EmployeeCard({ name, department, role }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Department: {department}</p>
            <p>Role: {role}</p>
        </div>
    );
}

function App() {
    const employees = [
        {
            id: 1,
            name: "Bishesh",
            department: "IT",
            role: "Developer"
        },
        {
            id: 2,
            name: "Rahul",
            department: "HR",
            role: "Manager"
        },
        {
            id: 3,
            name: "Sita",
            department: "Finance",
            role: "Accountant"
        }
    ];

    return (
        <div>
            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    name={employee.name}
                    department={employee.department}
                    role={employee.role}
                />
            ))}
        </div>
    );
}

export default App;