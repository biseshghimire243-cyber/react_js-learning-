function StudentAttendance({ name, present, total }) {
    const percentage = (present / total) * 100;

    return (
        <div>
            <h2>{name}</h2>
            <p>Classes Attended: {present}/{total}</p>
            <p>Attendance: {percentage.toFixed(1)}%</p>

            {percentage >= 75 ? (
                <p>Eligible for Examination</p>
            ) : (
                <p>Attendance Below Requirement</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <StudentAttendance name="Bishesh" present={45} total={50} />
            <StudentAttendance name="Rahul" present={30} total={50} />
        </div>
    );
}

export default App;