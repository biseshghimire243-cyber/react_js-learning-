function Department({ name, students, teachers, courses }) {
  const studentTeacherRatio = students / teachers;

  return (
    <div>
      <h3>{name}</h3>
      <p>Students: {students}</p>
      <p>Teachers: {teachers}</p>
      <p>Available Courses: {courses}</p>
      <p>Students per Teacher: {studentTeacherRatio.toFixed(1)}</p>
      <p>
        {studentTeacherRatio <= 20
          ? "Student-Teacher Ratio: Good"
          : "Student-Teacher Ratio: High"}
      </p>
    </div>
  );
}

export default function App() {
  const departments = [
    { id: 1, name: "Computer Science", students: 120, teachers: 8, courses: 12 },
    { id: 2, name: "Management", students: 200, teachers: 10, courses: 15 },
    { id: 3, name: "Information Technology", students: 90, teachers: 6, courses: 10 },
  ];

  return (
    <div>
      <h1>University Department Overview</h1>
      {departments.map((department) => (
        <Department key={department.id} {...department} />
      ))}
    </div>
  );
}