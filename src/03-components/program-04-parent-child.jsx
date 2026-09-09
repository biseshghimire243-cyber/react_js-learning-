function Student() {
    return (
        <div>
            <h2>Bishesh Ghimire</h2>
            <p>B.Sc. CSIT Student</p>
        </div>
    );
}

function College() {
    return (
        <div>
            <h2>College Information</h2>
            <p>Department of Computer Science</p>

            <Student />
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Dashboard</h1>

            <College />
        </div>
    );
}

export default App;