function App() {
    const name = "Bishesh Ghimire";
    const rollNo = 101;

    const math = 75;
    const java = 80;
    const web = 85;
    const database = 70;
    const networking = 78;

    const total = math + java + web + database + networking;
    const percentage = (total / 500) * 100;

    const result = percentage >= 40 ? "Passed" : "Failed";

    return (
        <div>
            <h1>Student Result Card</h1>

            <h2>{name}</h2>

            <p>Roll Number: {rollNo}</p>

            <h3>Marks</h3>

            <p>Mathematics: {math}</p>
            <p>Java: {java}</p>
            <p>Web Technology: {web}</p>
            <p>Database: {database}</p>
            <p>Networking: {networking}</p>

            <h3>Result</h3>

            <p>Total Marks: {total} / 500</p>
            <p>Percentage: {percentage}%</p>
            <p>Result: {result}</p>
        </div>
    );
}

export default App;