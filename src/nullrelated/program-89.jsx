function EmployeeCard({ name, position, experience }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Position: {position}</p>
            <p>Experience: {experience} years</p>

            {experience >= 3 && <p>Senior Level</p>}
        </div>
    );
}

function App() {
    const employees = [
        { id: 1, name: "Bishesh", position: "Developer", experience: 3 },
        { id: 2, name: "Rahul", position: "Designer", experience: 1 },
        { id: 3, name: "Sita", position: "Manager", experience: 5 }
    ];

    return (
        <div>
            <h1>Employees</h1>

            {employees.map((employee) => (
                <EmployeeCard
                    key={employee.id}
                    name={employee.name}
                    position={employee.position}
                    experience={employee.experience}
                />
            ))}
        </div>
    );
}

export default App;