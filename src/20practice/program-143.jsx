function ResultCard({ name, marks }) {
    let grade;

    if (marks >= 80) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 40) {
        grade = "C";
    } else {
        grade = "F";
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
            <ResultCard name="Bishesh" marks={88} />
            <ResultCard name="Rahul" marks={72} />
            <ResultCard name="Sita" marks={55} />
            <ResultCard name="Ram" marks={35} />
        </div>
    );
}

export default App;