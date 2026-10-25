function App() {
  const courses = [
    { name: "React Development", students: 35 },
    { name: "Python Programming", students: 42 },
    { name: "Web Design", students: 28 },
    { name: "Database Systems", students: 30 },
  ];

  const totalStudents = courses.reduce(
    (sum, course) => sum + course.students,
    0
  );

  return (
    <div>
      <h1>Course Enrollment Summary</h1>

      {courses.map((course) => (
        <p key={course.name}>
          {course.name}: {course.students} students
        </p>
      ))}

      <h2>Total Enrollments: {totalStudents}</h2>
      <p>Number of Courses: {courses.length}</p>
    </div>
  );
}

export default App;