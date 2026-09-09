function Student({ name, course, semester }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>Course: {course}</p>
            <p>Semester: {semester}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Profile</h1>

            <Student
                name="Bishesh Ghimire"
                course="B.Sc. CSIT"
                semester="7th"
            />
        </div>
    );
}

export default App;