function ResultCard({ name, marks }) {
    let grade;

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "Fail";
    }

    return (
        <div>
            <h2>{name}</h2>
            <p>Marks: {marks}</p>
            <p>Grade: {grade}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Student Results</h1>

            <ResultCard
                name="Bishesh Ghimire"
                marks={85}
            />

            <ResultCard
                name="Rahul Sharma"
                marks={68}
            />

            <ResultCard
                name="Suman Rai"
                marks={35}
            />
        </div>
    );
}

export default App;