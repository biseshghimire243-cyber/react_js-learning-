function Student(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Course: {props.course}</p>
            <p>Semester: {props.semester}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Students</h1>

            <Student
                name="Bishesh Ghimire"
                course="B.Sc. CSIT"
                semester="7th"
            />

            <Student
                name="Ram Sharma"
                course="BCA"
                semester="5th"
            />

            <Student
                name="Sita Thapa"
                course="BIT"
                semester="6th"
            />
        </div>
    );
}

export default App;