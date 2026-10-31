import React from "react";

function EmployeeCard({ employee }) {
    return (
        <div style={{
            border: "1px solid gray",
            padding: "15px",
            margin: "10px",
            borderRadius: "8px"
        }}>
            <h3>{employee.name}</h3>
            <p>Position: {employee.position}</p>
            <p>Department: {employee.department}</p>
            <p>Email: {employee.email}</p>
        </div>
    );
}

function App() {
    const employees = [
        {
            id: 1,
            name: "Bishesh Ghimire",
            position: "Frontend Developer",
            department: "IT",
            email: "bishesh@example.com"
        },
        {
            id: 2,
            name: "Rahul Sharma",
            position: "UI Designer",
            department: "Design",
            email: "rahul@example.com"
        },
        {
            id: 3,
            name: "Sita Thapa",
            position: "Project Manager",
            department: "Management",
            email: "sita@example.com"
        }
    ];

    return (
        <div>
            <h1>Employee Directory</h1>

            {employees.map(employee => (
                <EmployeeCard
                    key={employee.id}
                    employee={employee}
                />
            ))}
        </div>
    );
}

export default App;