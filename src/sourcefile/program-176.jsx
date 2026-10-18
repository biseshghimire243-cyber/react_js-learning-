function StudentFee({ name, tuitionFee, examFee }) {
    const totalFee = tuitionFee + examFee;

    return (
        <div>
            <h2>{name}</h2>
            <p>Tuition Fee: Rs. {tuitionFee}</p>
            <p>Exam Fee: Rs. {examFee}</p>
            <p>Total Fee: Rs. {totalFee}</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <StudentFee name="Bishesh" tuitionFee={25000} examFee={3000} />
            <StudentFee name="Rahul" tuitionFee={22000} examFee={2500} />
        </div>
    );
}

export default App;