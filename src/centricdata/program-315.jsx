import React from "react";

function DataTable({ columns, data }) {
    return (
        <table border="1" cellPadding="12" cellSpacing="0">
            <thead>
                <tr>
                    {columns.map((column, index) => (
                        <th key={index}>{column}</th>
                    ))}
                </tr>
            </thead>

            <tbody>
                {data.map((row, index) => (
                    <tr key={index}>
                        {columns.map((column, columnIndex) => (
                            <td key={columnIndex}>
                                {row[column.toLowerCase()]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

function App() {
    const columns = ["Name", "Course", "Semester"];

    const students = [
        { name: "Bishesh", course: "CSIT", semester: 7 },
        { name: "Rahul", course: "BCA", semester: 5 },
        { name: "Sita", course: "BIM", semester: 6 }
    ];

    return (
        <div>
            <h1>Student Records</h1>
            <DataTable columns={columns} data={students} />
        </div>
    );
}

export default App;