function Employee({ name, workingDays, presentDays }) {
  const absentDays = workingDays - presentDays;
  const attendance = (presentDays / workingDays) * 100;

  return (
    <div>
      <h3>{name}</h3>
      <p>Working Days: {workingDays}</p>
      <p>Present Days: {presentDays}</p>
      <p>Absent Days: {absentDays}</p>
      <p>Attendance: {attendance.toFixed(2)}%</p>
      <p>
        {attendance >= 90
          ? "Excellent Attendance"
          : attendance >= 75
          ? "Satisfactory Attendance"
          : "Attendance Needs Improvement"}
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>Employee Attendance Report</h1>
      <Employee name="Aarav Sharma" workingDays={25} presentDays={24} />
      <Employee name="Sita Rai" workingDays={25} presentDays={20} />
      <Employee name="Rohan Thapa" workingDays={25} presentDays={16} />
    </div>
  );
}