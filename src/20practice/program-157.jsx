function ScholarshipCard({ name, marks, income }) {
    const eligible = marks >= 80 && income <= 300000;

    return (
        <div>
            <h2>{name}</h2>
            <p>Marks: {marks}%</p>
            <p>Annual Family Income: Rs. {income}</p>

            {eligible ? (
                <p>Eligible for Scholarship</p>
            ) : (
                <p>Not Eligible for Scholarship</p>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <ScholarshipCard name="Bishesh" marks={88} income={250000} />
            <ScholarshipCard name="Rahul" marks={75} income={200000} />
            <ScholarshipCard name="Sita" marks={90} income={400000} />
        </div>
    );
}

export default App;