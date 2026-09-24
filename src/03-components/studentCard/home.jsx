import StudentCard from "../components/StudentCard/StudentCard";

function Home() {
    return (
        <div>
            <h1>Student Dashboard</h1>

            <StudentCard
                name="Bishesh Ghimire"
                course="B.Sc. CSIT"
                semester="8th Semester"
            />

            <StudentCard
                name="Rahul Sharma"
                course="BCA"
                semester="6th Semester"
            />
        </div>
    );
}

export default Home;