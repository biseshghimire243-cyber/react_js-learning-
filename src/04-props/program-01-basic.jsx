function Student(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Course: {props.course}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Information</h1>

            <Student
                name="Bishesh Ghimire"
                course="B.Sc. CSIT"
            />
        </div>
    );
}

export default App;