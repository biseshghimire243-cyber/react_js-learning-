function App() {
  const student = {
    name: "Sanjay",
    tuitionFee: 45000,
    libraryFee: 2000,
    labFee: 5000,
    scholarship: 10000,
  };

  const totalFee =
    student.tuitionFee +
    student.libraryFee +
    student.labFee -
    student.scholarship;

  return (
    <div>
      <h1>University Fee Calculator</h1>
      <h2>Student: {student.name}</h2>

      <p>Tuition Fee: Rs. {student.tuitionFee}</p>
      <p>Library Fee: Rs. {student.libraryFee}</p>
      <p>Lab Fee: Rs. {student.labFee}</p>
      <p>Scholarship: Rs. {student.scholarship}</p>

      <hr />
      <h2>Final Payable Fee: Rs. {totalFee}</h2>
    </div>
  );
}

export default App;