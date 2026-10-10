function ExamGradeCalculator({ name, marks }) {
    let grade;

    if (marks >= 90) {
        grade = "A+";
    } else if (marks >= 80) {
        grade = "A";
    } else if (marks >= 70) {
        grade = "B";
    } else if (marks >= 60) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
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
            <ExamGradeCalculator name="Bishesh" marks={92} />
            <ExamGradeCalculator name="Rahul" marks={76} />
            <ExamGradeCalculator name="Sita" marks={35} />
        </div>
    );
}

export default App;