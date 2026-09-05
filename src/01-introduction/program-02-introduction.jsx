function App() {
    const name = "Bishesh";
    const course = "B.Sc. CSIT";
    const semester = 7;

    return (
        <div>
            <h1>Student Information</h1>

            <p>Name: {name}</p>
            <p>Course: {course}</p>
            <p>Semester: {semester}</p>
        </div>
    );
}

export default App;