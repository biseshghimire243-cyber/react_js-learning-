function EmployeeCard({ name, department, salary, senior }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Department: {department}</p>
            <p>Salary: Rs. {salary}</p>

            {senior && (
                <p>⭐ Senior Employee</p>
            )}
        </div>
    );
}

function App() {
    const employees = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            department: "Development",
            salary: 55000,
            senior: true
        },
        {
            id: 2,
            name: "Rahul Sharma",
            department: "Marketing",
            salary: 40000,
            senior: false
        },
        {
            id: 3,
            name: "Sita Rai",
            department: "Design",
            salary: 60000,
            senior: true
        }
    ];

    return (
        <div>
            <h1>Employee Dashboard</h1>

            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    name={employee.name}
                    department={employee.department}
                    salary={employee.salary}
                    senior={employee.senior}
                />
            ))}
        </div>
    );
}

export default App;